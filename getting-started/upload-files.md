---
icon: arrow-up-from-bracket
---

# Upload Files

### Uploading Files with ExaDrive SDK

The ExaDrive SDK provides a straightforward method for uploading files to the ExaDrive network. This functionality allows you to easily integrate file uploads into your application, with the added benefit of receiving detailed information about the uploaded file.

### Basic Usage

To upload a file, use the `uploadFile` method of your ExaDrive instance. This method takes the file path as an argument and returns a promise that resolves when the upload is complete.

### Syntax

```
exaDrive.uploadFile(filePath)
```

* `filePath`: A string representing the path to the file you want to upload.

### Example

```
exaDrive.uploadFile('path/to/file.png')
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error('Upload failed:', error);
  });
```

### Response Structure

Upon successful upload, the promise resolves with a response object containing detailed information about the uploaded file.

### Sample Response

```
{
  "filename": "file.png",
  "fileDetails": {
    "encoding": "7bit",
    "mimetype": "image/png",
    "size": 411663
  },
  "url": "https://12345678-w3.exadrivecdn.com/file.png"
}
```

### Response Fields

* **filename**: The name of the uploaded file.
* **fileDetails**: An object containing technical details about the file:
  * **encoding**: The encoding type of the file (e.g., "7bit").
  * **mimetype**: The MIME type of the file (e.g., "image/png").
  * **size**: The size of the file in bytes.
* **url**: The URL where the uploaded file can be accessed.



### Advanced Usage

### Handling Large Files

For large files, consider implementing a progress indicator:

```
exaDrive.uploadFile('path/to/large_file.zip', {
  onProgress: (progress) => {
    console.log(`Upload progress: ${progress}%`);
  }
})
.then((res) => {
  console.log('Large file uploaded successfully:', res.data);
})
.catch((error) => {
  console.error('Upload failed:', error);
});
```

### Batch Uploads

If you need to upload multiple files, you can use Promise.all():

```
const filePaths = ['file1.jpg', 'file2.pdf', 'file3.docx'];

Promise.all(filePaths.map(file => exaDrive.uploadFile(file)))
  .then((results) => {
    results.forEach((res, index) => {
      console.log(`File ${index + 1} uploaded:`, res.data);
    });
  })
  .catch((error) => {
    console.error('One or more uploads failed:', error);
  });
```

### Best Practices

1. **Error Handling**: Always include error handling to manage potential upload failures gracefully.
2. **File Size Limits**: Be aware of any file size limits imposed by ExaDrive and handle them appropriately in your application.
3. **File Type Validation**: Implement client-side file type validation before uploading to ensure only permitted file types are sent.
4. **Secure File Handling**: Ensure that file paths are properly sanitized and validated to prevent security vulnerabilities.
5. **Retry Mechanism**: For improved reliability, especially with large files or unstable connections, implement a retry mechanism:

```
const uploadWithRetry = async (filePath, maxRetries = 3) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await exaDrive.uploadFile(filePath);
      return result;
    } catch (error) {
      if (attempt === maxRetries) throw error;
      console.log(`Upload attempt ${attempt} failed, retrying...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
};
```

By leveraging these upload capabilities and following best practices, you can efficiently manage file uploads in your application using the ExaDrive SDK.




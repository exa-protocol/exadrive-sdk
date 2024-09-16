---
icon: arrow-down-to-square
---

# Get Files

The ExaDrive SDK provides powerful methods to retrieve information about files stored in your ExaDrive. These functionalities allow you to efficiently manage and access your stored files.

### Retrieving All Files

The `getAllFiles()` method allows you to fetch a list of all files stored in your ExaDrive.

### Syntax

```
exaDrive.getAllFiles()
```

### Example

```
exaDrive.getAllFiles()
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error('Failed to retrieve files:', error);
  });
```

### Response Structure

The method returns a promise that resolves with an array of file objects. Each object contains detailed information about a file.

```
[
  {
    "fileName": "file1.png",
    "fileDetails": {
      "encoding": "7bit",
      "mimetype": "image/png",
      "size": 411663
    },
    "url": "https://12345678-w3.exadrivecdn.com/file1.png"
  },
  // ... more file objects
]
```

### Response Fields

* **fileName**: The name of the file.
* **fileDetails**: An object containing:
  * **encoding**: The file's encoding (e.g., "7bit").
  * **mimetype**: The MIME type of the file.
  * **size**: The file size in bytes.
* **url**: The URL where the file can be accessed.

### Retrieving a Specific File

To get information about a specific file, use the `getFile()` method.

### Syntax

```
exaDrive.getFile(fileName)
```

* `fileName`: A string representing the name of the file you want to retrieve.

### Example

```
exaDrive.getFile('file100.png')
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error('Failed to retrieve file:', error);
  });
```

### Response Structure

The method returns a promise that resolves with an object containing detailed information about the specified file.

```
{
  "filename": "file100.png",
  "fileDetails": {
    "encoding": "7bit",
    "mimetype": "image/png",
    "size": 411663
  },
  "url": "https://12345678-w3.exadrivecdn.com/file100.png"
}
```

### Advanced Usage

### Pagination for Large File Lists

If you have a large number of files, implement pagination:

```
const getFilesBatch = async (page = 1, limit = 100) => {
  try {
    const res = await exaDrive.getAllFiles({ page, limit });
    console.log(`Files (Page ${page}):`, res.data);
    return res.data;
  } catch (error) {
    console.error(`Failed to retrieve files (Page ${page}):`, error);
  }
};

const getAllFilesPaginated = async () => {
  let page = 1;
  let allFiles = [];
  let batch;
  do {
    batch = await getFilesBatch(page);
    allFiles = allFiles.concat(batch);
    page++;
  } while (batch && batch.length > 0);
  
  console.log('Total files retrieved:', allFiles.length);
  return allFiles;
};
```

### Filtering Files

Implement a function to filter files based on certain criteria:

```
const filterFiles = (files, criteria) => {
  return files.filter(file => {
    return (
      (!criteria.type || file.fileDetails.mimetype.includes(criteria.type)) &&
      (!criteria.minSize || file.fileDetails.size >= criteria.minSize) &&
      (!criteria.maxSize || file.fileDetails.size <= criteria.maxSize)
    );
  });
};

exaDrive.getAllFiles()
  .then((res) => {
    const imageFiles = filterFiles(res.data, { type: 'image', minSize: 100000 });
    console.log('Image files larger than 100KB:', imageFiles);
  })
  .catch((error) => {
    console.error('Failed to retrieve and filter files:', error);
  });
```

### Best Practices

1. **Error Handling**: Always include error handling to manage potential failures gracefully.
2. **Caching**: Consider implementing a caching mechanism for frequently accessed file information to reduce API calls.
3. **Rate Limiting**: Be aware of any rate limits on API calls and implement appropriate throttling if necessary.
4. **Large Data Sets**: For applications dealing with a large number of files, implement pagination or batching to manage memory usage and improve performance.
5. **Regular Syncing**: If your application requires up-to-date file information, consider implementing a regular syncing mechanism:

```
const syncFiles = async () => {
  try {
    const files = await exaDrive.getAllFiles();
    // Update local storage or state with the latest file information
    updateLocalFileCache(files.data);
    console.log('File sync completed successfully');
  } catch (error) {
    console.error('File sync failed:', error);
  }
};

// Run sync every hour
setInterval(syncFiles, 3600000);
```

By utilizing these file management capabilities and following best practices, you can effectively organize and access your files stored in ExaDrive using the SDK.

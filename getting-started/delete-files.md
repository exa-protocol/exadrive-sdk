---
icon: square-minus
---

# Delete Files

The ExaDrive SDK provides functionality to delete files from your ExaDrive storage. This feature allows you to manage your storage space efficiently by removing unnecessary files.

### Deleting a Single File

To delete a specific file from ExaDrive, use the `deleteFile()` method.

### Syntax

```
exaDrive.deleteFile(fileName)
```

* `fileName`: A string representing the name of the file you want to delete.

### Example

```
exaDrive.deleteFile('file1000.png')
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error('Failed to delete file:', error);
  });
```

### Response Structure

The method returns a promise that resolves with an object confirming the deletion of the file.

```
{
  "fileName": "file1000.png",
  "deleted": true
}
```

### Response Fields

* **fileName**: The name of the deleted file.
* **deleted**: A boolean indicating whether the file was successfully deleted.

### Deleting Multiple Files

To delete multiple files, you need to send separate requests for each file. Here's an example of how to delete multiple files:

```
const deleteMultipleFiles = async (fileNames) => {
  const results = [];
  for (const fileName of fileNames) {
    try {
      const result = await exaDrive.deleteFile(fileName);
      results.push(result.data);
      console.log(`Successfully deleted ${fileName}`);
    } catch (error) {
      console.error(`Failed to delete ${fileName}:`, error);
      results.push({ fileName, deleted: false, error: error.message });
    }
  }
  return results;
};

// Usage
const filesToDelete = ['file1.png', 'file2.jpg', 'file3.pdf'];
deleteMultipleFiles(filesToDelete)
  .then((results) => {
    console.log('Deletion results:', results);
  })
  .catch((error) => {
    console.error('Error in deletion process:', error);
  });
```

### Advanced Usage

### Batch Deletion with Concurrency Control

For improved performance when deleting multiple files, you can implement a batch deletion function with concurrency control:

```
const batchDeleteFiles = async (fileNames, concurrency = 5) => {
  const results = [];
  const queue = [...fileNames];
  const workers = new Array(concurrency).fill(queue.shift());

  const deleteFile = async (fileName) => {
    if (!fileName) return;
    try {
      const result = await exaDrive.deleteFile(fileName);
      results.push(result.data);
      console.log(`Successfully deleted ${fileName}`);
    } catch (error) {
      console.error(`Failed to delete ${fileName}:`, error);
      results.push({ fileName, deleted: false, error: error.message });
    }
    return deleteFile(queue.shift());
  };

  await Promise.all(workers.map(deleteFile));
  return results;
};

// Usage
const filesToDelete = ['file1.png', 'file2.jpg', 'file3.pdf', /* ... more files */];
batchDeleteFiles(filesToDelete)
  .then((results) => {
    console.log('Batch deletion results:', results);
  })
  .catch((error) => {
    console.error('Error in batch deletion process:', error);
  });
```

### Deletion with Confirmation

Implement a confirmation step before deleting files to prevent accidental deletions:

```
const deleteWithConfirmation = async (fileName) => {
  const confirmation = await promptUser(`Are you sure you want to delete ${fileName}? (yes/no)`);
  if (confirmation.toLowerCase() === 'yes') {
    try {
      const result = await exaDrive.deleteFile(fileName);
      console.log(`File ${fileName} deleted successfully:`, result.data);
      return result.data;
    } catch (error) {
      console.error(`Failed to delete ${fileName}:`, error);
      throw error;
    }
  } else {
    console.log(`Deletion of ${fileName} cancelled.`);
    return { fileName, deleted: false, reason: 'User cancelled' };
  }
};

// Helper function to prompt user (implementation depends on your environment)
function promptUser(message) {
  // This is a placeholder. Implement according to your application's UI/UX
  return new Promise((resolve) => {
    // In a browser environment, you might use:
    // resolve(window.confirm(message) ? 'yes' : 'no');
    
    // In a Node.js CLI environment, you might use readline:
    // const readline = require('readline').createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
    // readline.question(message + ' ', (answer) => {
    //   readline.close();
    //   resolve(answer);
    // });
  });
}
```

### Best Practices

1. **Error Handling**: Always include robust error handling to manage potential failures during the deletion process.
2. **Confirmation**: Implement a confirmation step for critical or irreversible deletions to prevent accidental data loss.
3. **Logging**: Maintain logs of deletion operations for auditing and troubleshooting purposes.
4. **Batch Processing**: When deleting multiple files, use batch processing with concurrency control to optimize performance and respect API rate limits.
5.  **Cleanup Routines**: Implement regular cleanup routines to automatically delete unnecessary or temporary files:

    ```
    const cleanupOldFiles = async (olderThanDays = 30) => {
      const allFiles = await exaDrive.getAllFiles();
      const now = new Date();
      const filesToDelete = allFiles.data.filter(file => {
        const fileDate = new Date(file.uploadDate); // Assuming there's an uploadDate field
        const daysDifference = (now - fileDate) / (1000 * 60 * 60 * 24);
        return daysDifference > olderThanDays;
      });

      return batchDeleteFiles(filesToDelete.map(file => file.fileName));
    };

    // Run cleanup every week
    setInterval(() => cleanupOldFiles(30), 7 * 24 * 60 * 60 * 1000);
    ```
6. **Soft Delete**: Consider implementing a "soft delete" feature in your application logic, where files are marked as deleted but not immediately removed from storage. This can provide a safety net for accidental deletions.

By following these practices and utilizing the deletion capabilities of the ExaDrive SDK, you can effectively manage your file storage and maintain an organized ExaDrive environment.

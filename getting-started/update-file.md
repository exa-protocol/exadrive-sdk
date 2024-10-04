---
icon: pencil
---

# Update File

The `updateFile` function allows you to update an existing file in your ExaDrive storage. Use this function to modify file contents or metadata.

```
exaDrive.updateFile(fileId, updatedData)
  .then(response => {
    console.log('File updated successfully:', response);
  })
  .catch(error => {
    console.error('Error updating file:', error);
  });
```

* **Parameters:**
  * `fileId`: The unique identifier of the file to be updated.
  * `updatedData`: The new data or metadata for the file.

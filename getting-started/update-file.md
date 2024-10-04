---
icon: pencil
---

# Update File

The `updateFile` function allows you to update an existing file's public CDN availability in your ExaDrive storage. You can enable or disable it.

```
exaDrive.updateFile(virtualFilePath: string, enableCDN: boolean)
  .then(response => {
    console.log('File updated successfully:', response);
  })
  .catch(error => {
    console.error('Error updating file:', error);
  });
```

* **Parameters:**
  * `virtualFilePath`: The virtual path of the file you want to update.
  * `enableCDN`: Boolean field to enable or disable the public CDN link.



### Sample Response

```
{
  "message": "virtual-file-path",
  "enableCDN": true
}
```




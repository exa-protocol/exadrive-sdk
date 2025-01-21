---
icon: globe-pointer
---

# Use the File in Your Project

<figure><img src="../.gitbook/assets/Screenshot 2024-09-13 at 9.32.51 PM (1).png" alt=""><figcaption></figcaption></figure>

Once you have uploaded a file to your ExaDrive bucket, you can easily incorporate it into your projects. Here’s how to utilize the file:

### Accessing the File

1. **Locate the File**:
   * Navigate to the **Buckets** section and select the relevant bucket.
   * Find your uploaded file in the list.
2. **File Details**:
   * **Filename**: The name of the file.
   * **Directory**: The path where the file is stored.
   * **Mimetype**: The file type (e.g., image/png).
   * **Size**: The file size.
   * **Public URL**: The file is accessible via a public URL.

### Using the File in Projects

### Step 1: Copy the CDN URL

* Click on **COPY URL** next to the file. This URL is the direct link to your file, hosted on ExaDrive's CDN.

### Step 2: Integrate the URL

*   **Web Projects**: Use the URL in your HTML or CSS to display images or link to files.

    ```
    <img src="https://12345678-w3.exadrivecdn.com/file.png" alt="My Image">
    ```
* **Mobile Apps**: Use the URL to fetch and display the file in your app.
* **APIs**: Include the URL in API responses to provide access to the file.

### Step 3: Manage File Access

* **Public Access**: Remember that all files are public. Ensure that sensitive data is not exposed inadvertently.



### Steps to Delete

1. **Locate the File**:
   * In the bucket view, find the file you wish to delete.
2. **Delete the File**:
   * Click the **Delete** button next to the file.
   * Confirm the deletion if prompted.

By following these steps, you can efficiently upload and delete files within the ExaDrive Dashboard.

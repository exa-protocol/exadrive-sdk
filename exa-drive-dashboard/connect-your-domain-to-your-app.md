# Connect Your Domain to Your App

You can connect a domain or subdomain of your website to your app so that all the URLs of the files you upload are masked under your domain's name.

Here are the steps once you reach the list of apps:

### Step 1: Open the App Settings

<figure><img src="../.gitbook/assets/Screenshot 2024-11-22 at 1.49.10 PM.png" alt=""><figcaption></figcaption></figure>

1. Navigate to the **Apps** section from the sidebar.
2. Locate the app for which you want to connect a domain.
3.  Click on the gear icon in the top-right corner of the app card and select **Settings**.\


    <figure><img src="../.gitbook/assets/Screenshot 2024-11-22 at 1.49.22 PM.png" alt=""><figcaption></figcaption></figure>
4. In the sidebar menu, select **Connect a Domain**.

### Step 2: Add a Domain

<figure><img src="../.gitbook/assets/Screenshot 2024-11-22 at 1.49.31 PM.png" alt=""><figcaption></figcaption></figure>

1. In the **Connect a Domain** popup, enter your domain name in the field provided.
   * Ensure that the domain name:
     * Does not begin with `http://`, `https://`, or any other protocol.
     * Supports subdomains if required.
2. Click **Add Domain** and confirm from the alert box which shows up.

### Step 3: Verify Domain Ownership

<figure><img src="../.gitbook/assets/Screenshot 2024-11-22 at 6.38.08 PM.png" alt=""><figcaption></figcaption></figure>

1. Once you add the domain, follow the instructions to update your DNS A record with your with your domain provider (example GoDaddy, Bluehost, Hostgator, etc).
   *   The required DNS records will be displayed in this step.\


       <figure><img src="../.gitbook/assets/Screenshot 2024-11-22 at 6.39.23 PM.png" alt=""><figcaption></figcaption></figure>
2. Click on **VERIFY OWNERSHIP** to verify that you own the domain.

### Step 4: Issue SSL Certificate

1. Once domain ownership is verified, an SSL certificate will be issued automatically by the Certificate Authority (CA).
2. Check back later to confirm that SSL issuance is complete.

### Notes

* The process ensures secure connections via SSL once completed.
* If there are any issues during verification or SSL issuance, double-check your DNS records and retry.

By following these steps, you can successfully connect a custom domain to your app and serve static websites or files through it.

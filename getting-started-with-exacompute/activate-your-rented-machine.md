---
icon: power-off
---

# Activate Your Rented Machine

### Accessing the Machine Token and Installing the ExaCompute Package

This guide explains how to access your machine token and install the ExaCompute package on your system to connect your machine to the decentralized cloud network.

### Step 1: Access the Machine Token

<figure><img src="../.gitbook/assets/image (4).png" alt="" width="563"><figcaption></figcaption></figure>

1. **Navigate to Your Machines**:
   * Go to the **Rent Your Machine** section in the ExaCompute Dashboard.
   * Locate your machine in the **Your Machines** list.
2. **Open Settings**:
   * Click on the **Settings** icon (gear icon) next to your machine.
3. **View Machine Token**:
   * In the Settings panel, locate the **View Machine Token** section.
   * Click **Click to View** to reveal your unique machine token.
   * Copy this token securely, as it will be required during installation.

### Step 2: Install the ExaCompute Package

1. **Download the ExaCompute Client**:
   * Download the appropriate ExaCompute package for your system from the official repository or website from this link:&#x20;
2. **Run the Installation Script**:
   * Make sure you are on an **Ubuntu** based system
   * **Install lxd (**[**https://canonical.com/lxd**](https://canonical.com/lxd)**)**
   * If you have an Nvidia GPU, **make sure CUDA is installed** - https://docs.nvidia.com/cuda/cuda-installation-guide-linux/ follow the guide for Ubuntu.
   * Open a terminal on your system.
   * Navigate to the directory where you downloaded the package.
   *   Run the installation command:

       ```
       sudo ./exa-compute-client-linux
       ```
3.  **Follow Installation Prompts**:\


    * The installer will check for OS compatibility and required dependencies (e.g., `lxd`).
    * If dependencies are missing, install them as instructed by the installer.

    <figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>
4. **Enter Your Machine Token**:
   * When prompted, paste the machine token you copied earlier.
   * The installer will verify your token and set it up for your machine.
5. **Finalize Installation**:
   * Once verification is complete, the installer will configure and start the ExaCompute service.
   * You will see messages confirming that:
     * The secret token has been successfully set up. 🎉&#x20;
     * The ExaCompute service has been added and started successfully.

### Notes

* Ensure that your system meets all prerequisites before running the installation.
* If token verification fails, double-check that you have copied it correctly from the dashboard.
* After installation, your machine will automatically connect to the ExaCompute network and start contributing resources.

By following these steps, you can successfully connect your machine to ExaCompute's decentralized cloud network and begin earning rewards.

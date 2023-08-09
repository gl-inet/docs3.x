# MacOS cannot write in Samba

You may experience some Mac devices given you a error messsge when using ExFAT format to write a file into it.

![macopyerror](https://static.gl-inet.com/docs/en/4/tutorials/network_storage/macos_cannot_write_samba/macopyerror.jpg){class="glboxshadow"}

This is due to the Finder will add attributes to the file before transfer and making the file is different from original for coping. You can solve this issue by:

1. Change your storage device into **NTFS** format.

2. Use the **cp -X file-name** command to copy the file.

    ![macopyfile](https://static.gl-inet.com/docs/en/4/tutorials/network_storage/macos_cannot_write_samba/macopyfile.png){class="glboxshadow"}

    Or use **cp -rX floder-name** command to copy the folder.

    ![macopyfolder](https://static.gl-inet.com/docs/en/4/tutorials/network_storage/macos_cannot_write_samba/macopyfolder.png){class="glboxshadow"}
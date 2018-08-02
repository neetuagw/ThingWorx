### **OS**: Ubuntu  | |  **Platform**: Google Cloud Platform | | **Project** : Qbots Dev

### **INSTANCE**: thingworx-vm
**Configuration**
> * INSTANCE TYPE : g1-small
> * RAM : 1.7 GB
> * CPU : 1vCPU
> * STORAGE : 100 GB
> * PRE-INSTALLED : TOMCAT 8.5.20

* **Bitnami TOMCAT** v8.5.20 is currently installed at /opt/bitnami/apache-tomcat/
* **Oracle JDK** version 8 is installed at /opt/bitnami/jvm/

### **INSTANCE**: ubuntu-xenial-thingsboard-dev	
**Configuration**
> * INSTANCE TYPE : g1-small
> * RAM : 1.7 GB
> * CPU : 1vCPU
> * STORAGE : 50 GB

---------------------------------------------------------------------------------------------
### **Thingworx Platform**

* Thingworx platform is running at https://SERVER-IP/Thingworx
* Installation steps taken:
> * Create /ThingworxPlatform /ThingworxStorage and /ThingworxBackupStorage directories 
> * Move Thingworx.war *(come with Foundation server download files)* file to the path /opt/bitnami/apache-tomcat/webapps/
> * Move licence.bin *(come with Foundation server download files)* file to /ThingworxPlatform dir.
> * Set Java library path i.e. */opt/bitnami/apache-tomcat/webapps/Thingworx/WEB-INF/extensions* in bitnami scripts file at /opt/bitnami/scripts/setenv.sh in LD_LIBRARY_PATH
* Thingworx Log Path : /ThingworxStorage/logs

### MQTT broker and server files ###
* To push dummy data fo Solar, Battery SoC, and Building demand data, the Javascript files are located on VM here: /usr/lib/node_modules/Thingworx_mqtt/MQTT, where Thingworx_mqtt is a Git repository.
* To publish dummy data use following command:

```
#!cmd

node publish_demand.js
```

### Backup Service ###
* Incremental and full backups every 24hrs is pushed to this area........

------------------------------------------------------------------------------------------------

###  **ThingsBoard Project**

* ThingsBoard Platform is running on https://cloud.qbots.ai/
* **Node Scripts** 
> To push the simulated live streaming data in ThingsBoard platform
> 
Scripts file Path: /srv/node/node_modules/Dashboard_Scripts/livestock_demo_scripts

* ThingsBoard Configuration file Path : /etc/thingsboard/conf/
* Log file path : /var/log/thingsboard

------------------------------------------------------------------------------------------------

###  **Instance Disk and Data Recovery**

* Creating an instance from a public image.

```
#!cmd
gcloud compute instances create [INSTANCE_NAME] \
    --image-family [IMAGE_FAMILY] \
    --image-project [IMAGE_PROJECT]
```

* Attach the new disk to the new instance as an additional disk.

```
#!cmd
gcloud compute disks create example-disk \
  --source-snapshot=example-snapshot --size=?

gcloud compute instances attach-disk example-instance --disk=example-disk
```

* Connect to the instance via SSH and create a new directory

* Once you're connected to the VM instance, determine the device identifier for the root volume on the disk using `lsblk` command.


```
#!cmd
gcloud compute ssh [INSTANCE_NAME]

sudo mkdir /mnt/new_directory
```

* Mount the additional disk to mounting directory:

```
#!cmd
sudo mount /dev/sdb1 /mnt/new_directory
```

* If the above command has been successfully executed, access the new-disk directory by typing the command below:

```
#!cmd
cd /mnt/new_directory
```

###  **Fully recovered Thingworx Application**

> * Please Note: This process was possible because we took periodical snapshots of the instance.

* Recovery steps taken:
    1. Creating an instance from a snapshot
> If you backed up a root persistent disk with a snapshot, you can use that snapshot to create a new instance. 
> Creating an instance from a snapshot is useful when you need to roll an instance back to a previous state or 
> restore the root disk of an instance that you deleted unintentionally.

    2. Create a standalone root persistent disk from a snapshot. Attach the disk with the 'boot=yes' property when you create a new instance.

```
#!cmd
gcloud compute disks create [DISK_NAME] --source-snapshot [SNAPSHOT_NAME]
```    
```
#!cmd
gcloud compute instances create [INSTANCE_NAME] \
    --disk name=[DISK_NAME],boot=yes
```

* Restarting Apache Tomcat:
> * Please Note! Reload the systemd daemon so that it knows about our service file: `sudo systemctl daemon-reload`
> * Please Note! Start the Tomcat service by typing: `sudo systemctl start tomcat`
> * Please Note! Double check that it started without errors by typing: `sudo systemctl status tomcat`
> * Please Note! You can check status of Tomcat in the 'catalina.out' file. 

    1. Change owner and access permissions of bin/ lib/ and webapps/:
    2. Change owner and access permissions of conf/: 
    3. Restart Tomcat service:

```
#!cmd
$ sudo chown -Rh tomcat8.5:tomcat8.5 bin/ lib/ webapps/ 
$ sudo chmod 775 bin/ lib/ webapps/
```  
```
#!cmd
$ sudo chown -Rh root:tomcat8.5 conf/ 
$ sudo chmod –R 650 conf/ 
```  
```
#!cmd
$ sudo systemctl restart tomcat
```  

* Updating Thingworx Data:
    1. Replace the ThingworxPlatform, ThingworxStorage and ThingworxBackupStorage with the files from the incremental snapshot.
> * Since the we can create a new persistent disk from our non-root incremental snapshot: `gcloud compute disks create example-disk --source-snapshot=example-snapshot --source-snapshot=example-snapshot2 --size=?` 
> * We are then able to attach your persistent disk to an instance: `gcloud compute instances attach-disk example-instance --disk=example-disk`
> * And then able to mount this as an external disk and replace the files: `sudo mkdir /mnt/new_directory` `sudo mount /dev/sdb1 /mnt/new_directory`
    2. Restart Tomcat service: `$ sudo systemctl restart tomcat`


* Accessing Thingworx Application from the URL:
    1. Tomcat uses port 8080 to accept conventional requests. Allow traffic to that port by typing: `sudo ufw allow 8080`
    2. Additional this needs to allowed in instance firewall settings.
    3. With the firewall modified, you can access the default splash page by going to your domain or IP address followed by :8080 in a web browser: `https://apps.qbots.ai` or `https://server_domain_or_IP:8080`
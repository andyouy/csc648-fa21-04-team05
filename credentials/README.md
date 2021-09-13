# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP
2. SSH username
3. SSH password or key.
    <br> If a ssh key is used please upload the key to the credentials folder.
4. Database URL or IP and port used.
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
5. Database username
6. Database password
7. Database name (basically the name that contains all your tables)
8. Instructions on how to use the above information.


|     Item     | Credentials     |
|    :---:         |     :---:     |
|  Website URL | http:/ec2-54-185-147-128.us-west-2.compute.amazonaws.com |
| SSH URL | ec2-user |
| SSH Password/Key | csc648team5-server2.pem file under Github Repo/Credentials: https://github.com/CSC-648-SFSU/csc648-fa21-04-team05/tree/master/credentials |
|Database URL | csc648team5.cx1pe5n2rnmb.us-west-2.rds.amazonaws.com|
| Database Username | csc648team5admin |
|Database Password  | csc648team5admin |


### SSH into EC2 server (Amazon Linux 2 AMI, changed from Ubuntu because of EC2 support options and free pricing):

- Open an SSH client.
- Locate your private key file. The key used to launch this instance is **csc648team5-server2.pem**
- Run this command, if necessary, to ensure your key is not publicly viewable: **chmod 400 csc648team5-server2.pem**
- Connect to your instance using its Public DNS (make sure the path to .pem file is correct, ours was in the same directory when using terminal):  
**ssh -i "csc648team5-server2.pem" ec2-user@ec2-54-185-147-128.us-west-2.compute.amazonaws.com**


### Database Access:
This is a MySQL database (Version ​​8.0.21) built with Amazon RDS. It is linked to the EC2 server above via a shared VPC configuration. To connect to the database, install MySQL Workbench (preferably any version about 8.0.20) and ‘create connection’. For the connection method, select standard TCP/IP over SSH, fill in the information above. There is no SSH Password (empty). SSH Key file is used instead which is linked above in the credentials folder of the repository. Also see Milestone 0 submission for a detailed illustration to fill in credentials if need be.








# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.

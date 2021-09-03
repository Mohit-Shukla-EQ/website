# Setup your AWS EC2
Following are the steps for AWS EC2. Similar steps might be needed for any other cloud platform.

Create a fresh EC2 instance

## Allow inbound calls to the server
1. Go to EC2 instance => security => security groups => inbound rules => edit inbound rule
1. Add a new inbounce rule as {Type : Custom TCP, port: 3000, source: AnywhereIPv4}. Save


## Install required packages on server
Once you have setup your EC2 server instance, you can open SSH session and install the website on the server following the standard installaiton steps. Check **How to install guide**.

[Read how to open SSH session with AWS](https://www.cloudbooklet.com/3-ways-to-connect-and-ssh-into-an-ec2-instance-aws/)
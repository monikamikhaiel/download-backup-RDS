# download-backup-RDS

Download the latest backup for RDS instance and save it in a file "backup_file.qp"
Requirements :
1. install Node.js
2. install newman via npm  >> npm install -g newman
3. fill the user information in the file "credentials.postman_environment.json"
    "domain_name"     -   "domain_id"
	"user_name"       -   "user_id"
	"project_id"      -   "user_password"
4. put the EXACT instance name  which we want to retrieve its backup in the "credentials.postman_environment.json"
How to use :
1. run the script >> node ./Backup-Download.js
the latest backup within 24 hours will be saved whether it is manual / Auto 
2. the output will be saved at the file -> "backup_file.qp"


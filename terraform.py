import os

def terraform_init():
    print("Initializing Terraform...")
    os.system("terraform init")

if __name__ == "__main__":
    terraform_init()

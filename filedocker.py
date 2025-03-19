def create_dockerfile():
    docker_content = """FROM python:3.9
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
"""
    with open("Dockerfile", "w") as file:
        file.write(docker_content)
    print("Dockerfile created successfully.")

if __name__ == "__main__":
    create_dockerfile()

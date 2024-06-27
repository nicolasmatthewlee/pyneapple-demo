# setup

1. build image

```shell
# in pyneapple-demo/
docker build -t pyneapple-demo .
```

2. start container

```shell
# in pyneapple-demo/
docker run -v ./client:/home/client --publish 3000:3000 -it pyneapple-demo sh
```

3. run client

```shell
# in home/
cd client; npm start
```

# run agwr

1. install Anaconda if not already installed
2. create new environment with `Python 3.11.8`
3. download AGWR source code

```shell
git clone git@github.com:mshahneh/AGWR.git
```

3. create and run `package-install.py` in `/AGWR` to install packages

```python
import subprocess

# Open and read the package-list.txt file
with open("package-list.txt", "r") as file:
	lines = file.readlines()

# Filter lines for pip packages, and prepare package names for pip installation
pip_packages = []

for line in lines:
	# Ignore comment lines and empty lines
	if line.startswith("#") or line.strip() == "":
		continue

    # Extract package name and version for pip packages
    if "=pypi_0" in line:
        package_info = line.strip().split("=")[0] # Get package_name==version
        pip_packages.append(package_info)

# Install packages using pip
for package in pip_packages:
	subprocess.run(["pip", "install", package])
```

_to fix error installing `mpi4py` run the following_

```shell
brew install mpich
pip install mpi4py
```

4. run `example.py` (or your own script) in `/AGWR`

```shell
python example.py
```

_to fix incompatible architecture error with `dlopen` on macOS, run the following_

```shell
pip uninstall ConfigSpace
pip install ConfigSpace
```

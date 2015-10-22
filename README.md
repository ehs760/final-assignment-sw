#final assignment


### Requirements

To get this thing up and running on a local machine, you need the following:

* Python 2.7
* Virtualenv (`pip install virtualenv`)
* Setup the virtualenv in the directory of this repository (`virtualenv .`)
* Activate the virtualenv (`source bin/activate` on linux-like systems)
* Install the necessary packages (install using `pip install -r requirements.txt`)
* A recent Stardog installation
	* The script assumes a Stardog database with the name 'tutorial' running at <http://localhost:5820/tutorial> (security disabled).
	* The database should have resoning enabled, and "SameAs" reasoning should be set to "Full".
	* If you want to use a different name or location (i.e. not running on localhost, port 5820) you need to set the `TUTORIAL_REPOSITORY` variable in `src/ass.py`

Once everything is ready:

* start your Stardog server with `stardog-admin server start --disable-security`,
* change dir into the `src` directory, and
* run `python ass.py`.

The tutorial is then running at <http://localhost:5000> .

# Direction
Enable new people to easily and quickly intall and setup a static site.

# installaiton steps
On test and prod servers, instead of cloning users should download zip from repo. 

# Data (to be implemented)
> ## Next User stories
> 1. Site admin should be able to pull all **system data** along with the code from repo.
> 1. Site admin should be able to maintain **site specific data** which contains site configurations, content of pages , etc. This is called **Master Data**. This should be not be overwritten each time admin pulls from repository.

## Folder structure


- **website** : applicaiton folder cloned from git
    - **public**
    - **src**
        - **components**
        - **add-ons**: ignored when repository is pulled from git from server 
        - **data**
            - **delievered-data**: delievred via git repo
                - **assets**
                    - **brand**
                    - **images**
                - **deliverred sample customisation**: in form of json collections
                - **product-documentation**
            - **site-specific-data**: ignored when repository is pulled from git from server 
                - **assets**
                    - **brand**
                    - **images**
                - **site configurations**: in form of json collections
                - **content**: 
                    - **pages**
                    - **blogs**
                    - **page divisions**
                    - **contents**
                    - **products**
                    - etc


# Almost Amazon  [![Netlify Status](https://api.netlify.com/api/v1/badges/011e8031-681a-433e-8471-44d18e368526/deploy-status)](https://app.netlify.com/sites/hld-almost-amazon/deploys)

## About the User
- The user of this app wants to keep track of books and authors of interest 

## Features
- The user is able to add authors and books to their personal database.
- The user can view the books and book details, as well author's details. 
- The user is also able to edit and delete the books and authors.
- Users are able to filter books by "on sale" and authors by "favorites".

## Video Walkthrough of Almost Amazon

https://www.loom.com/share/87aedff1611a4b0491de965326485ab4

## Code Snippet 
```javascript

const createAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors(authorObj.uid).then((authorsArray) => resolve(authorsArray));
        });
    }).catch((error) => reject(error));
});

```
## ScreenShots

![image](https://user-images.githubusercontent.com/86806913/137208903-c395c985-816d-444c-acf5-fe555877749b.png)
<br>
![image](https://user-images.githubusercontent.com/86806913/137208952-737ed744-9ba2-41f6-b05a-f4862dd62e1c.png)
<br>
![image](https://user-images.githubusercontent.com/86806913/137209174-f21f1aa4-21c3-43c5-ab95-087dd69e4eed.png)


## Relevent Links
- [View App](hld-almost-amazon.netlify.app)

## Author
[Halie Dyer](https://github.com/DyerHL)



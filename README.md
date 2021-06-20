# Blog-Api
A Simple Blog API  where user can create, delete and modify the blog. Also inbuilt with admin module feature, where admin can control the flow of all operatons with SuperUser permission.

<h4> Deployed Url: https://blogapi-test.herokuapp.com/ {api end points will be added here to test} </h4> 
Please use Postman to test the api.

# Required Packages to run this API
   <h3>"dependencies":</h3>
   {</br>
      "body-parser": "^1.19.0",</br>
      "express": "^4.17.1",</br>
      "json-web-token": "^3.2.0",</br>
      "jsonwebtoken": "^8.5.1",</br>
      "mongoose": "^5.12.12",</br>
      "passport": "^0.4.1",</br>
      "passport-jwt": "^4.0.0"</br>
      }

<h5>Above listed packages should be greater than or equivalent to the mentioned Version.</h5>

# API's Endpoints

<h3> for Admin's </h3>
<b>"/api/admin/login"  </b>(POST)</br>
<b>"/api/admin/create"  </b>(POST)</br>
<b>"/api/admin/delete/:id" </b> (DELETE) 

<h3> To use for Normal User </h3>
<b>"/api/user/login" </b> (POST)</br>
example:- {</br>
    "email" : "user@mail.com",<br>
    "password": "password"
}
</br>
</br>
<b>"/api/user/create" </b> (POST)</br> 
// required field will be in the format:</br>
example:- {</br>
   "name": "Username",</br>
    "email" : "user@mail.com",<br>
    "password": "password"
}

<h3> Blog's Endpoint: </h3>

<b>"/api/blog/showAll"</b>  (GET) // Note:to get all the blog with only title and author format </br> 
<b>"/api/blog/all-blog"</b>  (GET) //Note:It will return blog with all fields so that we can get the <b>id</b> of the blogs and can use further.</br> 
<b>"/api/blog/get-by-title/:title" </b> (GET) // :title can be fetched from the "/blog/all-blog" endpoint</br> 
<b>"/api/blog/get-one/:id" </b> (GET)</br>

<b>"/api/blog/create" </b> (POST)</br>
// required field will be in the format::</br>
Example:- {
    "title" : "Title of the blog",<br>
    "content" : "Content of the Blog" 
}

<b>"/api/blog/update/:id" </b> (PUT)</br>
<b>"/api/blog/delete/:id" </b> (DELETE)</br>

<h3>Note: "/:id" and "/:title" should be passed mannually </h3> 



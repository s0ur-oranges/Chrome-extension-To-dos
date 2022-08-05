## Introduction
This is a chrome extension that is built using html , css and react js , and is a simple to-do list with creating , editing and deleting functionalities. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

 ## Motivation
Chrome extensions are extremely useful applications . Considering the nature of a to-do list , it would be much more convenient to simply have a chrome extension for managing tasks rather than visiting a whole another website simpky checking and updating tasks. 
This is why , I decided to render this project as a chrome extension.

## Overview
The chrome extension appears like this in the browser window:

![Screenshot (4)](https://user-images.githubusercontent.com/91944643/183036583-c9e46128-faed-41f0-b70e-1ecb15301e83.png)




We can create a new item in the list,




![Screenshot (5)](https://user-images.githubusercontent.com/91944643/183036568-842ec435-b481-4cba-99bf-5838b207f18c.png)


![Screenshot (6)](https://user-images.githubusercontent.com/91944643/183036563-d085ef69-7f66-4ed7-bff9-5838e34f64eb.png)



Edit an existing item , 



![Screenshot (7)](https://user-images.githubusercontent.com/91944643/183036557-3c948e52-f325-4da8-bb6f-f2549203100d.png)


![Screenshot (8)](https://user-images.githubusercontent.com/91944643/183036551-e505fa41-556d-4ca9-a5fa-2bae44133ace.png)




Or delete an item




![Screenshot (13)](https://user-images.githubusercontent.com/91944643/183036579-5b6b9fcf-6c04-47b5-a166-b09f4ad6e1d1.png)
![Screenshot (14)](https://user-images.githubusercontent.com/91944643/183036575-1288946a-23db-40c1-90a6-3dba9f0f38eb.png)



## How to use this in your own browser?

1)Download the source code as a zip folder.

2)Unzip the folder at any location of your choice.

3)For creating the build folder , open the command prompt , navigate to the main directory and run:
### `npm run build`

Make sure the manifest.json file has the following content


 ```   {
  "name": "Todos",
  "version": "1.0.0",
  "description": "A todo list",
  "manifest_version": 3,
  "author": "Jahanvi Chaudhary",
  "action":{
      "default_popup": "index.html",
      "default_title": "Todo List"
  }
} 

```

4) Go to chrome and open more tools -> extensions

![Screenshot (10)](https://user-images.githubusercontent.com/91944643/183036543-50cbc388-d283-4de4-a0ef-98dadc6e5d32.png)

5)switch on developer mode




![Screenshot (11)](https://user-images.githubusercontent.com/91944643/183036530-85391679-1452-4bb2-ba55-2ef611636d93.png)



6)click on load unpacked 



![Screenshot (12)](https://user-images.githubusercontent.com/91944643/183036590-7fb97b45-ce74-47c1-a0c5-332216b48275.png)

7) Navigate to the build folder and select it . 
8) The chrome extension should be added to your list of extensions now.
9) Go to extensions (the puzzle shaped piece appearing on the top of chrome) , and click on the extension.
10) Create, edit and delete tasks.
















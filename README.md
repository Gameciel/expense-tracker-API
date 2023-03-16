# Documentation for expense-tracker-API  
*by Gameciel*  
&nbsp;  
Install required modules: `npm install`  
Start Server: `nodemon index.js`  
API URL: `localhost:2000/expenses`  

**Available HTTP Method:**  
- `GET`  
- `POST`  
- `DELETE`  
- `PUT`  
- `PATCH`  

## GET Method:
> **To get all expenses**  
- `localhost:2000/expenses`  
&nbsp;  
> **To get expenses by ID**  
- `localhost:2000/expenses/4`  
- `localhost:2000/expenses/999`  
&nbsp;  
> **To get expenses by category**  
- `localhost:2000/expenses?category=food`  
- `localhost:2000/expenses?category=digital`  
&nbsp;  
> **To get expenses by date range**
- `localhost:2000/expenses?date-start=2023-02-20&date-end=2023-02-20`  
- `localhost:2000/expenses?date-start=2023-02-21&date-end=2023-02-23`  
&nbsp;  
> **To get expenses by start/end date**
- `localhost:2000/expenses?date-start=2023-02-20`  
- `localhost:2000/expenses?date-end=2023-02-23`  
&nbsp;  
## POST Method:
> **Put into request body as JSON as following** ( *assume that we've got the formatted date* )  
&nbsp;{  
&nbsp;&nbsp;&nbsp;"date": "2023-03-16",  
&nbsp;&nbsp;&nbsp;"name": "Kuota Internet",  
&nbsp;&nbsp;&nbsp;"nominal": 55000,  
&nbsp;&nbsp;&nbsp;"category": "digital"  
&nbsp;}  

- `localhost:2000/expenses`  
&nbsp;  

## DELETE Method:  
### **Note: id param is mandatory** ( *will return 404 if not found* )  
> **To delete by ID**  
- `localhost:2000/expenses/7`  
- `localhost:2000/expenses/999`  
&nbsp;  

## PATCH Method:  
### **Note: id param is mandatory** ( *will return 404 if not found* )  

> **Put into request body as JSON as following**  
&nbsp;{  
&nbsp;&nbsp;"nominal": 155000  
&nbsp;}  

- `localhost:2000/expenses/6`  
&nbsp;  

## PUT Method:  
### **Note: id param is mandatory** ( *will return 404 if not found* )  

> **Put into request body as JSON as following**  
&nbsp;{  
&nbsp;&nbsp;&nbsp;"date": "2023-02-14",  
&nbsp;&nbsp;&nbsp;"name": "Exfoliator",  
&nbsp;&nbsp;&nbsp;"nominal": 120000,  
&nbsp;&nbsp;&nbsp;"category": "selfcare"  
&nbsp;}  

- `localhost:2000/expenses/6`  
&nbsp;  

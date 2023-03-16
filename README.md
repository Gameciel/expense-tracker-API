# expense-tracker-API  
*by Gameciel*  
&nbsp;  
API URL: `localhost:2000/tracker/data`

**Available HTTP Method:**  
- `GET`  
- `POST`  
- `DELETE`  
- `PUT`  
- `PATCH`  

## GET Method:
> **To get all expenses**  
- `localhost:2000/tracker/data`  
&nbsp;  
> **To get expenses by ID**  
- `localhost:2000/tracker/data?id=4`  
- `localhost:2000/tracker/data?id=999`  
&nbsp;  
> **To get expenses by category**  
- `localhost:2000/tracker/data?category=food`  
- `localhost:2000/tracker/data?category=digital`  
&nbsp;  
> **To get expenses by date range**
- `localhost:2000/tracker/data?date-start=2020-08-20&date-end=2020-08-20`  
- `localhost:2000/tracker/data?date-start=2020-08-21&date-end=2020-08-23`  
&nbsp;  
## POST Method:
> **Put into request body as JSON as following** ( *assume that we've got the formatted date* )  
&nbsp;{  
&nbsp;&nbsp;&nbsp;"date": "2023-01-16",  
&nbsp;&nbsp;&nbsp;"name": "Kuota Internet",  
&nbsp;&nbsp;&nbsp;"nominal": 55000,  
&nbsp;&nbsp;&nbsp;"category": "digital"  
&nbsp;}  

- `localhost:2000/tracker/data`  
&nbsp;  

## DELETE Method:  
### **Note: id param is mandatory** ( *will return 404 if not found* )  
> **To delete by ID**  
- `localhost:2000/tracker/data?id=4`  
- `localhost:2000/tracker/data?id=999`  
&nbsp;  

## PATCH Method:  
### **Note: id param is mandatory** ( *will return 404 if not found* )  

> **Put into request body as JSON as following**  
&nbsp;{  
&nbsp;&nbsp;"nominal": 155000  
&nbsp;}  

- `localhost:2000/tracker/data?id=4`  
&nbsp;  

## PUT Method:  
### **Note: id param is mandatory** ( *will return 404 if not found* )  

> **Put into request body as JSON as following**  
&nbsp;{  
&nbsp;&nbsp;&nbsp;"date": "2020-08-22",  
&nbsp;&nbsp;&nbsp;"name": "Exfoliator",  
&nbsp;&nbsp;&nbsp;"nominal": 120000,  
&nbsp;&nbsp;&nbsp;"category": "selfcare"  
&nbsp;}  

- `localhost:2000/tracker/data?id=4`  
&nbsp;  

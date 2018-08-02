## We have adopted the Thingmodel of Thingworx to design Architecture for Qbots Platform. ## 

(https://bitbucket.org/repo/ngKdEjy/images/2462039536-Qbots_Architecture.PNG)

## ** 1. PV ThingShape** ##

Thingshape to set some basic properties for the data points coming from Solar panel meter

Project : Qbots | Tags : Qbots-ThingShape | ValueStream : null 

Column_name   | Description   | Data Type
------------- | ------------- | -------------
PV_Output  | This column will store the live solar generation data  | Float
Status_Monitor  | Status of Solar panels generation  | Float

** 1.1 PV Thing**

Project : LiveStockCenter | Tags : LiveStock-Device | ValueStream : PV_Generation_ValuStream | ThingTemplate : MQTT | ThingShape : PV_ThingShape 

Column_name   | Description   | Data Type
------------- | ------------- | -------------
Monthly_Output  | This column will store the aggregated monthly PV generation value  | Float


## ** 2. Battery ThingShape** ##

Thingshape to set some basic properties for the data points coming from PCS

Project : Qbots | Tags : Qbots-ThingShape | ValueStream : null 

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
Status | This column will store the status of Battery  | Integer | Remote
SOC  | This column will store the latest values of State of Charge | Long  | Remote
Energy_Charge  | This column will store the value of how much Battery Charge | Long  | Remote
Energy_Discharge  | This column will store the value of how much of Battery get Discharge | Long | Remote
Cycles  | This column will store the values of number of battery cycles left | Long | Remote
Current | This column will store the DC Current of Battery  | Long | Remote
Voltage | This column will store the Battery Voltage  | Long | Remote
AvgTemp | This column will store the Average temperature of Battery  | Float | Remote

### ** 2.1 ComtecBattery ThingTemplate** ###

Project : Qbots | Tags : Qbots-ThingTemplate | ValueStream : null | ThingTemplate : RemoteThing | ThingShape : Battery_ThingShape 

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
- | -  | - | -

** 2.2 Battery Thing**

Project : LiveStockCenter | Tags : LiveStock-Device | ValueStream : BatteryLiveStock_ValueStream | ThingTemplate : ComtecBattery_ThingTemplate | ThingShape : IndustrialThingShape


```
#!note

*Note: Remote binding of properties inherited from ThingShape will be implemented at Thing level and that in New Composer.*
```


Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
State_of_Charge | Temporary property to receive dummy data from MQTT  | Float | Local [TestMQTT]

## ** 3. Project Info ThingShape** ##

Thingshape to set some basic properties for Project Information

Project : Qbots | Tags : Qbots-ThingShape | ValueStream : null 

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
Project_Lifetime  | How long the project will last in months  | Integer | -
BatteryManufacturer  | Manufacturer name of the Battery to be used in that project  | Float | -
Battery_StorageCapacity | Storage capacity of Battery in kWh  | Float | -
Battery_PowerCapacity | Power Capacity of Battery in KW  | Float | -
Availability_Hours | -  | Float | -
Auction_Rate | -  | Float | -

### ** 3.1 Project Info ThingTemplate** ###

Project : Qbots | Tags : Qbots-ThingTemplate | ValueStream : null | ThingTemplate : GenericThing | ThingShape : ProjectInfo_ThingShape 

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
- | -  | - | -

** 3.2 Project Info Thing**

Project : LiveStockCenter | Tags : LiveStock-Device | ValueStream : 	
ProjectInfo_LiveStock_ValueStream | ThingTemplate : ProjectInfo_ThingTemplate | ThingShape : null

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
- | -  | - | -


## ** 4. Building ThingShape** ##

Thingshape to set some basic properties for data points coming from Building Management System

Project : Qbots | Tags : Qbots-ThingShape | ValueStream : null 

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
Total_Consumption  | This column will store the latest value of Building energy consumption data  | Float | -
Demand  | This column will store the latest value of Demand  | Float | -
Energy_Price  | This column will store Current price per kWh  | Float | -
Grid_Consumption  | This column will store the daily value of consumption from Grid  | Float | -
Battery_Consumption  | This column will store the daily value of consumption from Grid  | Float | -
Cost_of_Energy | - | Float | - 
TRiad | This column will store the predicted and actual values of TRiad | Infotable | -

### ** 4.1 Building+PV_MQTT ThingTemplate** ###

Project : Qbots | Tags : Qbots-ThingTemplate | ValueStream : null | ThingTemplate : MQTT | ThingShape : Building_ThingShape 


```
#!note

*Note: This Template is temporary to allow collecting the data from MQTT. In future we will use Building+PV_ThingTemplate*
```


Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
PV_Consumption | This column will store the daily value of consumption from Solar  | Float | -

** 4.2 Building Thing**

Project : LiveStockCenter | Tags : LiveStock-Device | ValueStream : 	
BuildingLiveStock_ValueStream | ThingTemplate : Building+PV_MQTT_ThingTemplate | ThingShape : null

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
PV_Monthly_Consump | This column will store the monthly consumption from PV  | Float | -
Grid_Monthly_Consump | This column will store the monthly consumption from Grid  | Float | -
Battery_Monthly_Consump | This column will store the monthly consumption from Battery  | Float | -

## ** 5. EnergyTrading ThingShape** ##

Thingshape to set some basic properties for data points coming from Energy Trading

Project : Qbots | Tags : Qbots-ThingShape | ValueStream : null 

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
Energy_Sold  | This column will store the amount of daily energy sold  | Long | -
Energy_Selling_Price  | This column will store the price at which energy sold  | Float | -
Avg_Price  | This column will store the average price  | Float | -
Avg_Peak_Price  | This column will store the average peak price  | Float | -
Avg_Offpeak_Price  | This column will store the average offpeak price  | Float | -
Highest_Price  | This column will store the highest price of a day  | Float | -
Lowest_Price  | This column will store the lowest price of a day  | Float | -
Net_Income  | This column will store the lowest price of a day  | Float | -
Gross_Income  | This column will store the lowest price of a day  | Float | -


## ** 6. Ancillary Services ThingShape** ##

Thingshape to set some basic properties for data points coming from Ancillary Services

Project : Qbots | Tags : Qbots-ThingShape | ValueStream : null 

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
FFR_Notifications  | This column will store values of FFR  | Integer | -
CapacityMarket_Notifications  | This column will store the values of capacity market  | Integer | -
Aggregator_Rate | - | Number | -
Availability Fee  | Availability_Fee  | This column will store the values of availability fee  | Integer | -


## ** 7. Finances ThingShape** ##

Thingshape to set some basic properties for data points for Finances calculation

Project : Qbots | Tags : Qbots-ThingShape | ValueStream : null 

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
Savings_DUOS  | This column will store values of Savings from DUOS  | Float | -
Savings_TRIAD  | This column will store values of Savings from TRIAD  | Float | -
Income_Frequency  | This column will store values of Income from Frequency  | Float | -
Income_CapacityMarket  | This column will store values of Income from Capacity Market  | Float | -
Income_EnergyMarket  | This column will store values of Income from Energy Market  | Float | -
Income_Target  | This column will store value of Target at beginning of every month  | Float | -
IRR  | This column will store daily value of Internal Rate of Return  | Float | -
Payback_Predictor  | This column will store daily value of Payback period predictor  | Float | -

### ** 5|6|7.1 Services ThingTemplate** ###

Project : Qbots | Tags : Qbots-ThingTemplate | ValueStream : null | ThingTemplate : GenericThing | ThingShape : EnergyTrading_ThingShape, AncillaryServices_ThingShape , Finances_ThingShape

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
- | -  | - | -

** 5|6|7.2 Services Thing**

Project : Qbots | Tags : LiveStock-Devices | ValueStream : ServicesLiveStock_ValueStream | ThingTemplate : Services_ThingTemplate | ThingShape : null

Column_name   | Description   | Data Type     | Binding
------------- | ------------- | ------------- | --------
FFR_Monthly  | This column will store values of FFR monthly notifications | Integer | -
CapacityMarket_Monthly  | This column will store the values of capacity market monthly notifications  | Integer | -
Energy_Sold_Monthly  | This column will store the amount of total energy sold in a month  | Long | -
Avg_Price_Monthly  | This column will store the average price of a month  | Float | -
Highest_Price_Monthly  | This column will store the highest price of a month  | Float | -
Lowest_Price_Monthly  | This column will store the lowest price of a month  | Float | -

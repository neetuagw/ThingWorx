# **Value Stream or Live Streaming Data tables** #

### **1. Project Info Data Table** ###

Data Columns  | Column_name   | Description   | Data Type
------------- | ------------- | ------------- | -------------
Project Lifetime  | Project_Lifetime  | How long the project will last in months  | Integer
Battery Manufacturer  | BatteryManufacturer  | Manufacturer name of the Battery to be used in that project  | Float
Battery Storage Capacity  | Battery_StorageCapacity | Storage capacity of Battery in kWh  | Float
Battery Power Capacity  | Battery_PowerCapacity | Power Capacity of Battery in KW  | Float
Hours Available  | Availability_Hours | -  | Float
Auction Rate  | Auction_Rate | -  | Float
Timestamp     | timestamp  | ThingWorx will store DateTime of when entry is created  | timestamp

### **2. PV Production Data Table** ###

Data Columns  | Column_name   | Description   | Data Type
------------- | ------------- | ------------- | -------------
PV production Output  | PV_Output  | This column will store the live solar generation data  | Float
Status Monitoring  | Status_Monitor  | Status of Solar panels generation  | Float
Monthly PV production output  | Monthly_Output  | This column will store the aggregated monthly PV generation value  | Float
Timestamp     | timestamp  | ThingWorx will store DateTime of when entry is created  | timestamp

### **3. Battery Data Table** ###

Data Columns  | Column_name   | Description  | Data Type
------------- | ------------- | -------------| -------------
Battery Status | Status | This column will store the status of Battery  | Integer
Battery SOC  | SOC  | This column will store the latest values of State of Charge | Long
Energy Charge in Battery  | Energy_Charge  | This column will store the value of how much Battery Charge | Long
Energy Discharge from a Battery  | Energy_Discharge  | This column will store the value of how much of Battery get Discharge | Long
Battery Cycles  | Cycles  | This column will store the values of number of battery cycles left | Long
Battery DC Current | Current | This column will store the DC Current of Battery  | Long
Battery Voltage | Voltage | This column will store the Battery Voltage  | Long
Battery Average Temperature  | AvgTemp | This column will store the Average temperature of Battery  | Float
Utilisation of Battery for Ancillary Services  | Ancillary_Utilisation | This column will store the percentage value of utilisation by activity  | Float
Utilisation of Battery for Demand Shifting  | DemandShifting_Utilisation | TThis column will store the percentage value of utilisation by activity  | Float
Utilisation of Battery for Energy Trading  | EnergyTrading_Utilisation | This column will store the percentage value of utilisation by activity  | Float
Utilisation of Battery for Self Consumption  | SelfConsumption_Utilisation | This column will store the percentage value of utilisation by activity  | Float
Timestamp  | timestamp  | ThingWorx will store DateTime of when entry is created  | timestamp


### **4. Weather Data Table** ###

Data Columns  | Column_name   | Description   | Data Type
------------- | ------------- | ------------- | -------------
Temperature  | temperature | This column will store the Live Temperature data  | Float
Pressure  | pressure  | This column will store the Live Pressure data  | Float
Wind  | wind  | This column will store the Live Wind data  | Float
Humidity  | humidity  | This column will store the Live Humidity data  | Float
Timestamp     | timestamp  | ThingWorx will store DateTime of when entry is created  | timestamp

### **5. Building Data Table** ###

Data Columns  | Column_name   | Description   | Data Type
------------- | ------------- | ------------- | -------------
Energy Consumption  | Consumption_Total  | This column will store the latest value of Building energy consumption data  | Float
Demand  | Demand  | This column will store the latest value of Demand  | Float
Main grid Energy Price  | Energy_Price  | This column will store Current price per kWh  | Float
Energy Consumption from Main Grid  | Grid_Consumption  | This column will store the daily value of consumption from Grid  | Float
Direct consumption, Energy Consumption from Solar directly  | Solar_Consumption  | This column will store the daily value of consumption from Solar  | Float
Self-stored consumption, Energy Consumption from Battery  | Battery_Consumption  | This column will store the daily value of consumption from Battery  | Float
Triad values | TRiad | This column will store the predicted and actual values of Triad | Infotable [TRiad_DShape]
Monthly Energy Consumption from Main Grid  | Grid_Monthly_Consump  | This column will store the Monthly value of consumption from Grid  | Float
Monthly Direct consumption, Monthly Energy Consumption from Solar directly  | Solar_Monthly_Consump  | This column will store the Monthly value of consumption from Grid  | Float
Monthly Self-stored consumption, Monthly Energy Consumption from Battery  | Battery_Monthly_Consump  | This column will store the Monthly value of consumption from Grid  | Float
Timestamp     | timestamp  | ThingWorx will store DateTime of when entry is created  | timestamp

### **6. Energy Trading Table** ###

Data Columns  | Column_name   | Description   | Data Type
------------- | ------------- | ------------- | -------------
Daily Energy sold  | Energy_Sold  | This column will store the amount of daily energy sold  | Long
Average Price | Avg_Price  | This column will store the average price  | Float
Average Peak Price | Avg_Peak_Price  | This column will store the average peak price  | Float
Average OffPeak Price | Avg_Offpeak_Price  | This column will store the average offpeak price  | Float
Highest Price | Highest_Price  | This column will store the highest price of a day  | Float
Lowest Price | Lowest_Price  | This column will store the lowest price of a day  | Float
Net Income | Net_Income  | This column will store the lowest price of a day  | Float
Gross Income | Gross_Income  | This column will store the lowest price of a day  | Float
Monthly Energy sold  | Energy_Sold_Monthly  | This column will store the amount of total energy sold in a month  | Long
Average Price | Avg_Price_Monthly  | This column will store the average price of a month  | Float
Average Peak Price | Avg_Peak_Price_Monthly  | This column will store the average peak price of a month  | Float
Average OffPeak Price | Avg_Offpeak_Price_Monthly  | This column will store the average offpeak price of a month  | Float
Monthly Highest Price | Highest_Price_Monthly  | This column will store the highest price of a month  | Float
Monthly Lowest Price | Lowest_Price_Monthly  | This column will store the lowest price of a month  | Float
Timestamp | timestamp  | ThingWorx will store DateTime of when entry is created  | timestamp

### **7. Ancillary Services Table** ###

Data Columns  | Column_name   | Description   | Data Type
------------- | ------------- | ------------- | -------------
Firm Frequency Response Notifications | FFR_Notifications  | This column will store values of FFR  | Integer
Capacity Market Notifications | CapacityMarket_Notifications  | This column will store the values of capacity market  | Integer
Firm Frequency Response Monthly Notifications | FFR_Monthly  | This column will store values of FFR monthly notifications | Integer
Capacity Market Monthly Notifications | CapacityMarket_Monthly  | This column will store the values of capacity market monthly notifications  | Integer
Availability Fee  | Availability_Fee  | This column will store the values of availability fee  | Integer
Timestamp | timestamp  | ThingWorx will store DateTime of when entry is created  | timestamp

### **8. Finances Data Table** ###

Data Columns  | Column_name   | Description   | Data Type
------------- | ------------- | ------------- | -------------
DUOS Charges with Battery | DUOS_Charges_Battery  | This column will store values of DUOS Charges with Battery  | Float
DUOS Charges without Battery | DUOS_Charges  | This column will store values of DUOS Charges without Battery  | Float
TRIAD Charges with Battery | TRIAD_Charges_Battery  | This column will store values of TRIAD Charges with Battery  | Float
TRIAD Charges without Battery | TRIAD_Charges  | This column will store values of TRIAD Charges without Battery  | Float
Savings from DUOS | Savings_DUOS  | This column will store values of Savings from DUOS  | Float
Savings from TRIAD | Savings_TRIAD  | This column will store values of Savings from TRIAD  | Float
Income from Frequency | Income_Frequency  | This column will store values of Income from Frequency  | Float
Income from Capacity market | Income_CapacityMarket  | This column will store values of Income from Capacity Market  | Float
Income from Energy Market | Income_EnergyMarket  | This column will store values of Income from Energy Market  | Float
Income Targets | Income_Target  | This column will store value of Target at beginning of every month  | Float
Internal Rate of Return | IRR  | This column will store daily value of Internal Rate of Return  | Float
Payback period predictor | Payback_Predictor  | This column will store daily value of Payback period predictor  | Float
Timestamp | timestamp  | ThingWorx will store DateTime of when entry is created  | timestamp

-----------------------------------------------------------------------------------------------------------

# **Historical or Static Data Tables** #

Note: *First we need to define the structure of DataTables in DataShapes and then assign specific DataShape to its DataTable or ### InfoTable*

### **1. DUos DataTable** ###
*DUos_DataShape*

Data Columns  | Column_name   | Description   | Data Type
------------- | ------------- | ------------- | -------------
DUos ID  | DUosID  | ID of the entry  | String (Primary Key)
Band Name  | Band  | Either RED , AMBER or GREEN  | String
Region Name  | Region | One region name out of 14  | String
Start time  | StarTime | Power Capacity of Battery in KW  | DateTime
End Time  | EndTime | -  | DateTime
Charges  | Charges | -  | Float
Day of Date  | Day | Weekday or Weekend | String
Year  | Year | 2017 or 18 ..  | Integer
Month  | Month | One out of 12 months | String

### **2. TRiad Infotable** ###
*TRiad_DShape*

Note: It is a property in Building_ThingShape with Infotable as Base type

Data Columns  | Column_name   | Description   | Data Type
------------- | ------------- | ------------- | -------------
TRiad ID  | TRiad_ID | ID of the entry  | String (Primary Key)
Region Name  | Region | One region name out of 14  | String
Actual Date n time  | Actual_DateTime | Date and time when TRiad happened  | DateTime
Forecast Date n time   | Forecast_DateTime | Predicted date and time when TRiad might happen  | DateTime
Charges  | Charges | Charges applied when TRiad happen  | Float
Demand  | Demand | Value of Demand in KW | Integer
Type | Type | Actula or Predicted | String
Settlement_Period  | Settlement_Period | - | String
Settlement_Run  | Month | - | String
Year  | Year | 2017-2018 or 2018-2019 | String

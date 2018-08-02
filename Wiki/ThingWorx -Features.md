# ThingWorx Foundation Server #

* ThingWorx foundation Server runs on **Tomcat Server**
* It supports **HTML5** for the Visualisation
* You can enable storing the Live Streaming data in historical format using **Data Storage Entity**
* It allows to have **Blogs and Wikis** for your application
* You can find all the platform logs in System Entity
* ThingWorx **doesn’t support True Multi-tenancy** but User management with different set of accessibility allows to achieve the same. 
* It supports **PostgreSQL** or **Cassandra** but also provide flexibility to connect to External DB using JDBC connectors.
> Best Practice: Utilise ThingWorx Data Storage for Timeseries Data and connect to third party data (Relational data) for Non-timeseries data 
* **THING : physical representation of your device** or physical thing with following sub entities:
 > * **Properties**: Data attributes such as in case of Battery Monitoring - SoC, Demand , Efficiency ..
 > * **Services**: Javascript code to apply Business Logics
 > * **Events**: Alerts
 > * **Subscriptios**: Javascript code to define those Actions to be taken on those Alert

* You can invoke the services from the Visualisation like on click of Button 
* Mashups : Entity for Visualisation or Dashbaords. 
* Drag and Drop Widgets
* **Drag and drop the data points on Widgets to connect it with Widgets**

-----------------------------------------------------------------------------------------------------------------

# ThingWorx Industrial Connectivity #

* It is Windows Application which allows to connect your device using different protocols to ThingWorx Foundation Server.
* N**eed a Windows computer** with Administrator privileges to install the application.
![ThingWorx_Architecture.png](https://bitbucket.org/repo/ngKdEjy/images/484122889-ThingWorx_Architecture.png)

* We need to first Connect a ThingWorx Industrial Connectivity Application to the Foundation Server. Which is only available in New Composer. 
* Please find the instructions here : [Industrial Connectivity quickstart](https://developer.thingworx.com/resources/guides/thingworx-industrial-connectivity-guide)
* Before establishing the connection between ICA and Foundation Server, we have to create a Thing with base od IndustrialGateway Thing Template.
* To secure the connection between ThingWorx Foundation and ThingWorx Industrial Connectivity, you need to utilize an **Application Key**
> BEST PRACTICE: We recommend you create separate keys for every connected device, user, or system. This allows for better security control in case of situations where you may need to revoke access from specific device(s).
------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
# ThingWorx Data Storage #
* https://community.thingworx.com/community/developers/blog/2016/03/11/where-should-i-store-my-thingworx-data
* Thingworx allows you to store both Timeseries and Non-timeseries data. 
* Thingworx Data Storage Guide : https://developer.thingworx.com/resources/guides/data-model-storage-guide
* They have following Data Storage Methods :
> * Value Stream [Timeseries Data] : Exclusively tied to a particular Thing; notable in that it does not require a Data Shape
> * Stream [Timeseries Data] : a more “generic” container for time-series data than Value Streams; doesn’t have to be tied to a Thing
> * Data shape : the “format” of a separate storage structure. Datashape is used to define the column types of static data to be stored in Data tables.
> * Data Table [Non-timeseries] : basically an in-platform spreadsheet; won’t replace an external relational database, but can be good for static information that is not time-series data
> * Info Table [Non-timeseries] : similar to a Data Table, but not standalone; instead, it’s a Base Type for a Property (just like Number or String); can be useful when static data is logically tied to a Thing

* Historical data (if in huge amount) : Best practice to store the mass data in external database and connect it with ThingWorx via JDBC connection.  
* The type that defines each column is not held internally to the data structure itself. Instead, it is abstracted out as a **Data Shape**
* To import the **data from Excel file**,  The Import/ Export menu available at the top are for Entities/ Data and Extensions only. 
* To load **data from an XML**, you can use (or create a new service based on) some of the services like LoadXML available under Resources -> ContentLoaderFunctions. 
* To Load **data from a CSV file******, you can use the [CSV Parser Extension available in the Marketplace](https://marketplace.thingworx.com/tools/csv-parser)
* **Load data from CSV/XLS to DataTable :** You would have to have a extension written to load up each row to the DataTable. But, to make it go easier, if you can save the xls file as a csv, you can use the csv parser extension. That has a method to read the csv file. You can create a Datashape that matches the coloum of your csv file and use AddDataTableEntries service of the data table and small for loop to go through the rows to add.

------------------------------------------------------------------------------------------------------

# ThingWorx Multi-tenancy Feature #
* https://www.youtube.com/watch?v=HzFqxvgHtpI&index=8&list=PLz1ppcU_kaneagUT9qgQfz3HByf6-9zTF

------------------------------------------------------------------------------------------------------

# ThingWorx MQTT #
*  **The MQTT ThingWorx extension acts as an MQTT client**, so in order to test it we need to install a local broker.
*  To send the simulated data to ThingWorx, we need to run local **MQTT broker** ([Install MQTT local broker](https://sivatechworld.wordpress.com/2015/06/11/step-by-step-installing-and-configuring-mosquitto-with-windows-7/)) on our system and publish messages to it. To know more about how to send simulated data using MQTT protocol to ThingWorx , please visit this link : [MQTT Support in ThingWorx](https://community.thingworx.com/thread/1784)

--------------------------------------------------------------------------------------------------------
# ThingWorx REST #

* **Rest call to External server from ThingWorx** : https://community.thingworx.com/community/developers/blog/2017/03/02/contentloaderfunctions-in-thingworx


-----------------------------------------------------------------------------------------------------------
# ThingWorx Widgets #
* **Pie Chart** : To bind the data with Pie Chart , we need to have a **infotable** with atleast two fields : LabelField and ValueField. [How to use Pie Chart Widget]
> https://www.youtube.com/watch?v=FL5k_GLcqr4
> http://support.ptc.com/cs/help/thingworx_hc/thingworx_6.0_hc/index.jspx?id=thingworx040437&action=show
> https://community.thingworx.com/thread/39785

# EPA Data

USA Counties Map with Air Pollutant Data.

- Geojson files for 2015, 2016, 2017, 2018, 2019
  - Variables include:
    - Median Air Quality Index (AQI)
      - Good AQI is a value between 0 and 50
      - Moderate: 51-100
      - Unhealthy for sensitive groups: 101-150
      - Unhealthy: 151-200
      - Very unhealthy: 201 and higher
    - (From the EPA:) A daily index value is calculated for each air pollutant measured. The highest of those index values is the AQI value, and the pollutant responsible for the highest index value is the "Main Pollutant." These columns give the number of days each pollutant measured was the main pollutant. 
      - Days CO
      - Days NO2
      - Days Ozone
      - Days SO2
      - Days PM2.5
      - Days PM10





# NYC Open Data

### Air Pollutants

- Geojson files for each air pollutant at a neighborhood UHF-42 level for 2009-2010
  - Ozone
  - Elemental Carbon
  - Nitrogen Dioxide
  - PM2.5
  - Sulfur Dioxide
  - Nitric Oxide
- Geojson file for all air pollutants at a borough level for 2009-2010
  - Single file with average concentration at each borough for Ozone, Elemental Carbon, Nitrogen Dioxide, PM2.5, Sulfur Dioxide, and Nitric Oxide.



### Asthma Health

- Geojson files for the following:

  - Neighborhood UHF-42 level and Borough level:

    - 2005-2007 and 2009-2011
      - PM2.5 attributable:
        - ED Visits
          - Child
          - Adult
        - Deaths
          - Adult
      - Ozone attributable:
        - ED Visits
          - Child
          - Adult
        - Hospitalizations
          - Child
          - Adult

    

### Citywide Air and Asthma Rates

- CSV file with the following citywide averages
  - Pollutants: elemental carbon, PM2.5, Nitric Oxide, Nitrogen Dioxide, Ozone, Sulfur Dioxide
  - Asthma health stats:
    - 2005-2007, 2009-2011
    - Adults and children
    - ED visits, hospitalizations, deaths





# Asthma Rates 2017 & 2018

Note: confirm source as CDC
USA State Map showing asthma prevelance percentages.

- Geojson file for 2017 only
  - Variables include:
    - Adults
    - Children
    - Asthma prevalence percentages per state
    - Standard Error
- CSV with asthma prevalence from 2001 - 2017
  - percentages for total, adults, and 
  
- CSV with asthma prevelance percentages by state and mortality for adults 2018





# 500 Cities Data

- Asthma [rates](https://www.cdc.gov/500cities/definitions/health-outcomes.htm#CASTHMA) in US Adults (2017) showing annual number of state residents with current asthma and current asthma prevalence. 

- [Rates](https://www.cdc.gov/500cities/definitions/unhealthy-behaviors.htm#SLEEP) of sleeping (2016) less than 7 hours on average during a 24-hour period among adults 18+

  - Bar chart with confidence intervals showing annual prevalence percentages by state for both sleeping <7 hours and asthma prevelance.

    








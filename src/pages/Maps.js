/* eslint-disable  import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { SlideshowLightbox } from 'lightbox.js-react';

import Main from '../layouts/Main';
import ScrollToTopButton from '../components/Template/ScrollToTopButton';

const Maps = () => (
    <Main title="Maps" description="Learn about Pablo Hernandez Borges's maps.">
        <article className="post" id="maps">
            <header>
                <div className="title">
                    <h2>
                        <Link to="/maps">Maps</Link>
                    </h2>
                    <p>Mapping the world, one data point at a time</p>
                </div>
            </header>
            <h3>
                Crafting Spatial Narratives
            </h3>
            <p>
                My cartographic journey began with <a href="https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview">ArcGIS Pro</a>,{' '}
                a powerful tool for transforming raw geospatial data into compelling visual stories. These maps highlight my ability to{' '}
                analyze complex datasets, from satellite imagery to demographic layers, revealing hidden patterns in landscapes and societies.{' '}
                Whether mapping vegetation health with NDVI indices or creating 3D relief models of rugged terrains, each project pushed the{' '}
                boundaries of design and functionality, blending science with artistry to communicate insights that drive informed decisions.
            </p>
            <p>
                <SlideshowLightbox className="images" showThumbnails theme="lightbox">
                    <img alt="Caprock Canions" src="/images/maps/map_caprockcanions.jpg" />
                    <img alt="Tornado Damage in Anderson, TX" src="/images/maps/map_tornado_damage_anderson_tx.png" />
                    <img alt="Affected Areas in Galveston, TX" src="/images/maps/map_affected_areas_galveston_tx.png" />
                    <img alt="Hurricane Damage in Galveston, TX" src="/images/maps/map_hurricane_galveston_tx.png" />
                </SlideshowLightbox>
            </p>
            <p>
                Through <a href="https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview">ArcGIS Pro</a>, I've honed skills in{' '}
                geoprocessing, symbology, and layout design, ensuring every map is not just{' '}
                accurate but also intuitive and engaging. This foundation ignited my passion for spatial storytelling, inspiring me{' '}
                to explore how maps can bridge data and human experience.
            </p>
            <h3>
                Planetary-Scale Remote Sensing
            </h3>
            <p>
                As the scale of my questions grew, I moved into the cloud. Using{' '}
                <a href="https://earthengine.google.com/">Google Earth Engine</a> (GEE), I harness petabytes{' '}
                of satellite imagery (Landsat, Sentinel, MODIS) to monitor environmental change over decades. By writing{' '}
                custom JavaScript API scripts, I bypass the limitations of local hardware to perform multi-spectral analysis,{' '}
                land-cover classification, and time-series monitoring at a global scale.
            </p>
            <p>
                <SlideshowLightbox className="images" showThumbnails theme="lightbox">
                    <img alt="Landsat. Lubbock, TX." src="/images/maps/gee_lubbock_landsat.png" />
                    <img alt="NDVI Explorar App. Lubbock, TX." src="/images/maps/gee_lubbock_NDVI_Explorar_App.png" />
                    <img alt="Median SR. Lubbock, TX." src="/images/maps/gee_lubbock_medianSR.png" />
                    <img alt="Machine Learning. Lubbock, TX." src="/images/maps/gee_machine_learning.png" />
                </SlideshowLightbox>
            </p>
            <h3>
                Orinoco Mining Arc Study
            </h3>
            <p>
                In this targeted GEE project, I analyzed the Orinoco Mining Arc in Venezuela, leveraging{' '}
                high-resolution satellite data to assess mining impacts on ecosystems. By integrating Landsat{' '}
                and Sentinel imagery with machine learning algorithms, I mapped NDVI, surface reflectance,{' '}
                RF classification, and forest loss, revealing the human footprint on one of the world's richest{' '}
                mineral regions. This work sharpened my expertise in environmental justice and policy-driven{' '}
                cartography, inspiring me to advocate for sustainable resource management through data-driven{' '}
                narratives.
            </p>
            <p>
                <SlideshowLightbox className="images" showThumbnails theme="lightbox">
                    <img alt="Truecolor image from GEE. OMA, Bolivar, Venezuela." src="/images/maps/gee_oma_truecolor_2021.png" />
                    <img alt="RF Classification. OMA, Bolivar, Venezuela." src="/images/maps/gee_oma_RF_classification_2021.png" />
                    <img alt="NDVI. OMA, Bolivar, Venezuela." src="/images/maps/gee_oma_ndvi_2016_2021.png" />
                    <img alt="Infrared. OMA, Bolivar, Venezuela." src="/images/maps/gee_oma_infrared_2021.png" />
                </SlideshowLightbox>
            </p>
            <h3>
                Spatial Data Science
            </h3>
            <p>
                The peak of my spatial workflow is R and RStudio. Moving to a code-first approach allows for 100%{' '}
                reproducibility and the integration of advanced statistics into map-making. Using packages like sf,{' '}
                ggplot2, and rayshader, I treat every map as a statistical graphic, ensuring that the visual output{' '}
                is as mathematically rigorous as it is aesthetically compelling.
            </p>
            <p>
                <SlideshowLightbox className="images" showThumbnails theme="lightbox">
                    <img alt="Power Plants of Venezuela." src="/images/maps/3d_power_plant_venezuela_color_PRINT.png" />
                    <img alt="River Basins of Venezuela." src="/images/maps/venezuela-3d-river-basins_PRINT.png" />
                    <img alt="Tanaka Relief Map, Venezuela." src="/images/maps/map_3d_relief_VE.png" />
                    <img alt="Temperature and Precipitaiton (1981-2010), Venezuela." src="/images/maps/venezuela-bivariate-3d-PRINT.png" />
                </SlideshowLightbox>
            </p>
            <h3>
                Socio-Economic Analytics &amp; Global Trends
            </h3>
            <p>
                Beyond aesthetics, I use R to solve complex spatial problems. I focus on mapping human{' '}
                systems: modeling poverty through proxy data, analyzing maritime traffic density from AIS data,{' '}
                and visualizing local GDP. These maps are designed to inform policy and uncover the hidden spatial{' '}
                patterns of human activity.
            </p>
            <p>
                <SlideshowLightbox className="images" showThumbnails theme="lightbox">
                    <img alt="Poverty in the Caracas Metropolitan Area." src="/images/maps/caracas_grdi.png" />
                    <img alt="Bathymetry of Lake Valencia, Venezuela." src="/images/maps/lake_of_valencia_PRINT.png" />
                    <img alt="Local GPP per capita (2021), Bolivia." src="/images/maps/map_GDPPC_2021_tiles_BO_PRINT.png" />
                    <img alt="Shipping Traffic by type, Venezuela." src="/images/maps/shipping_traffic_bytype_VENEZUELA_with_ports_PRINT.png" />
                </SlideshowLightbox>
            </p>
            <h3>
                The Path Ahead
            </h3>
            <p>
                My journey with cartography is always evolving. If you’d like to discuss the intersection of data{' '}
                and geography or need help visualizing spatial patterns,{' '}
                please feel free to email me at <a href="mailto:hi@pablohernandezb.dev">hi[at]pablohernandezb.dev</a>.
            </p>
            <ScrollToTopButton />
        </article>
    </Main>
);

export default Maps;

---

layout: page

title: "IDEAS-Classic: Use Cases"
#blurb: "Three multifaceted use cases are driving and demonstrating the capabilities and approaches that are being developed in the IDEAS project"

---




<!-- Sidebar Nav -->
<!-- ---------------------------------------------------------------------- -->

{% include_relative nav-sidebar current="Use Cases" %}

<!-- Content -->
<!-- ---------------------------------------------------------------------- -->


Three multifaceted use cases are driving and demonstrating the capabilities and approaches that are being developed in the IDEAS project. These use cases are aligned with existing DOE and NSF programs and are designed to foster collaborative development and interdisciplinary communication. Each use case touches on multiple aspects of software productivity challenges and requires this extreme-scale scientific software development ecosystem to reach its goals.

## Use Case 1: Hydrological and Biogeochemical Cycling in the Colorado River System

{% include media-img.html source = "ideas-classic/EastRiver-meanders-300x225.png" %}

Climate and land use changes are projected to significantly impact hydrology, biogeochemical cycling, and vegetation over the coming decades, with potentially profound impacts on the ecosystem services of critical watersheds. The impact is likely to be particularly severe in the western U.S., where semi-arid conditions and limited water availability have already placed the large river systems under stress, with potentially detrimental effects on their water supply and carbon regulation services.  Biogeochemical cycling within the larger western U.S. river systems is the result of a coupled set of processes that include subsurface and surface water flow, soil processes, and evolving vegetation, all of which interact to control the short- and long-term dynamics of watershed hydrology and biogeochemical cycles. Arguably, the most important of the biogeochemical cycles is that of carbon because of its effect on both the redox status of subsurface systems (which in large part flow back into the river systems) and its regulation of atmospheric CO2, the most important of the greenhouse gases. Moreover, since these changes are expected to take place over extended periods, they are not reasonably addressed by observation alone.  In this project, the emerging community-based xSDK will provide the advanced simulation capabilities necessary **to address the following science objective:**

***A better understanding of aquifer redox status and climate impacts on watershed carbon and nitrogen cycling through higher fidelity, multi-scale models simulated at high spatial resolution.***

This work builds on the Sustainable Systems SFA 2.0 at LBNL and demonstrates the componentization of its genome-enabled biogeochemistry capability in CrunchFlow, and its use as a component through the Alquimia geochemistry interface library. Variable resolution unstructured meshes with a resolution of less than 10 cm near the meandering river will be used with the Amanzi/ATS simulator, and upscaling of the coupled surface/subsurface reacting flow through these meanders along a 5km stretch of the East river are being explored.  In addition, the potential of leveraging structured subsurface/surface coupled flow components from ParFlow in the Chombo structured AMR framework is being assessed.

## Use Case 2: Hydrology and Soil Carbon Dynamics of Arctic Tundra

{% include media-img2x.html 
	source1 = "ideas-classic/polygons_pristine.png"
    source2 = "ideas-classic/polygons_drying.png"
%}

Increasing temperature in the Arctic region is expected to lead to increases in the thickness of the active layer (the region of soil that thaws annually), thus creating significant changes in surface and subsurface hydrology and soil biogeochemistry. Understanding and predicting the impact and feedbacks of these potential changes on the net release of carbon in the Arctic is particularly challenging in areas such as the Barrow Environmental Observatory (BEO) in Alaska.  In these areas,  microtopography in the form of low-centered polygonal ground is evolving into high-centered polygonal ground as the ice wedges that form the perimeters of the polygons melt.  This evolution of the microtopography is transforming the thermal-hydrology of the system from wet to dry and may lead to the formation of large-scale drainage networks.  **The fundamental science objective** that IDEAS addresses is the following:

***Determine how dynamic microtopography caused by thawing permafrost alters the hydrologic and carbon cycles of Arctic lowland tundra.***

This work leverages ongoing studies in the Next Generation Ecosystem Experiment (NGEE) – Arctic, and addresses the important and challenging need to transfer this understanding to larger scales suitable for Earth System Models (ESMs).   Specifically, building on microtopography resolving models of a few polygons (tens of meters), an intermediate scale model will be developed that uses one-dimensional thermal hydrology models coupled with a two-dimensional overland flow model using the lightweight framework capabilities of Amanzi/ATS to reach scales of ESM grid cells (~30km). This new intermediate-scale model explores the use of biogeochemistry from PFLOTRAN through the Alquimia interface library and may use CLM for land surface processes.

## Use Case 3: Hydrologic, Land Surface, and Atmospheric Process Coupling over the Continental U. S.

{% include media-img.html source = "ideas-classic/Figure4-small-1024x663.png" %}

Figure4-smallRecent studies demonstrate that feedbacks between groundwater dynamics, overland (surface) flow, land surface and vegetation processes, and atmospheric boundary layer development significantly affect local and regional climate across a range of scales and climatic conditions. Furthermore, the type and distribution of vegetation cover affects land-atmosphere water and energy fluxes as well as runoff generation and overland flow processes, with significant feedbacks on local and regional climate. While the full effect of these feedbacks across varied terrain (e.g., from plains to mountains) is not well understood, results suggest that understanding and predicting hydrologic response to changing climate and forest cover requires explicit consideration of groundwater-land surface-atmosphere feedbacks within terrestrial modeling frameworks.  In this project advances in design, algorithms, and refactoring are enabling the IDEAS team to use ParFlow and other emerging open-source integrated hydrology simulation capabilities **to address the following scientific objective:**

***A better understanding of terrestrial system response to climate change, from local to continental scales, through high-fidelity integrated groundwater, land surface, and atmospheric process-based simulations.***

This project is exploring the computational challenges and scientific potential of integrated hydrology models at regional and continental scales, including their coupling to both land process models and atmospheric models. Interoperability between solvers, simulators, and libraries will be leveraged to enhance the productivity of computational hydrology. Developing hyperresolution continental scale models is an identified Grand Challenge in computational hydrology. The project builds upon an integrated hydrologic model of the Mississippi and Colorado River basins previously developed and focuses on the componentization, interoperability, and performance portability of terrestrial hydrologic simulators. We use a phased approach to explore multiscale, multiphysics treatments of Earth system modeling from the bedrock into the atmosphere. As described above, to adequately capture feedbacks between deeper subsurface flow, the land energy budget, and the lower atmosphere, explicit connections need to be made between these systems in models. This project focuses on three key elements of this system: integrated subsurface and surface flow, land-surface water and energy fluxes, and feedbacks to the lower atmosphere to provide state-of-the-science simulations over North America.

## Additional Synergy and Opportunities with BER Programs

IDEAS is exploring similar opportunities within the Hydro-Biogeochemical Process Dynamics in the Groundwater-Surface Water Interaction Zone project at PNNL and the new multi-lab NGEE Tropics project. Both involve many similar thermal-hydrological models of coupled surface/subsurface flow with biogeochemical reactive transport. Key multiscale and land-surface modeling opportunities are being sought.

<?php

$liste = RegionManager::getList();
$listeDepartement = DepartementManager::getListDepartement();
?>
<div class="espaceHorizon "></div>
<div id="contenu">
<?php
if ($liste!=null)
{
	echo '<div id="combo">';
	echo '<select id="region">';
	foreach($liste as $elt)
	{
		echo '<option value="'.$elt->getIdRegion().'">'.$elt->getLibelleRegion().'</option>';
	}
	
	echo '</select>';
	echo '<div class="espaceHorizon "></div>';
	echo '<select id="departement">';
	foreach($listeDepartement as $listeDp)
	{
	echo '<option value="'.$listeDp->getIdDepartement().'">'.$listeDp->getLibelleDepartement().'</option>';
	}
	echo '</select></div>';
} ?>

</div>
<div class="espaceHorizon "></div>
<div class="espaceHorizon "></div>
<!-- appel d'un script Ajax pour compter le nombre de ligne en base de données -->
<script src="JS/combobox.js"></script>

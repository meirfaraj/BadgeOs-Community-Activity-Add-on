var idKey = "earner-description-";
function displayEarnerDescription(e){
    jQuery(".badgeos-earner-description").hide();
    var elt = jQuery("#"+ idKey + e);
    var badgeElt = jQuery("#" + "badgeos-earner-item-" + e);
    elt.css('top'   , badgeElt.position().top   + badgeElt.width());
    elt.css('left'  , badgeElt.position().left + (badgeElt.width() - elt.width())/2 );
    elt.fadeIn("fast");
}
function hideEarnerDescription(e){
    var elt = jQuery("#"+ idKey + e);
    elt.stop();
    jQuery(".badgeos-earner-description").hide();
}
//////////////////////////////////////////////

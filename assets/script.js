//======================================================================
//
//  Body links
//
//======================================================================  
var dashLinks = [
    {
        link_group: "Admin",
        link_label: "Home",
        link_url: "https://www.verizon.com",
        link_image: "",
        link_target: "_blank"
    },
    {
        link_group: "Admin",
        link_label: "Shop",
        link_url: "https://www.verizon.com/shop",
        link_image: "",
        link_target: "_blank"
    },
    {
        link_group: "Admin",
        link_label: "Deals",
        link_url: "https://www.verizon.com/deals",
        link_image: "",
        link_target: "_blank"
    }
]





$(document).ready(function(){
//======================================================================
//
//  Navigation links
//
//======================================================================
    var dashGroups =  [
        {
            group_id: "Dash",
            group_url: "/dash"
        },
        {
            group_id: "Admin",
            group_url: "/admin"
        },
        {
            group_id:"AEM",
            group_url:"/aem"
        }
    ]
    var navTemplate = $("#dashNavLinks").html();
    var compiledNavCode = Handlebars.compile(navTemplate);
    var navResult = compiledNavCode(dashGroups);
    $("#nav_content").html(navResult);
//======================================================================
//======================================================================



});

  function test(group_id){
      console.log(group_id);
    var bodyTemplate = $("#dashBodyLinks").html();
    var compiledBodyCode = Handlebars.compile(bodyTemplate);
    var bodyResult = compiledBodyCode(dashLinks);
    $("#body_content").html(bodyResult);
  };
  
  
  
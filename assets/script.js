$(document).ready(function(){
    //json data for handlebar template
    var data = {templateEngine:"Handlebar",
                italicText:"<i>This text should be in italics</i>",
                group_id:"Admin"
    };
    var dashLinks = {
        link_group: "Admin",
        link_label: "Home",
        link_url: "https://www.verizon.com",
        link_image: "",
        link_target: "_blank"
    };
    var dashGroups =  {
        group_id: "Admin",
        group_url: "/admin"
    }
    
    //handlebar template html
    var template = $("#dashTemplateLinks").html();
    var navTemplate = $("#dashNavLinks").html();
    
    //handlebar's compile method returns special function which can be used to get final html
    var compiledCode = Handlebars.compile(template);
    var compiledNavCode = Handlebars.compile(navTemplate);
    
    //json data is passed top compiled code and result will be html
    var result = compiledCode(dashGroups);
    var navResult = compiledNavCode(dashGroups);
    
    //compiled html can be rendered in document
    $("#content").html(result);
    $("#nav_content").html(navResult);



  });
  
  
  
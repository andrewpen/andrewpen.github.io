var dashFeatures = [
    {
        group_id:"Links",
        group_label:"links"
    },
    {
        group_id:"To Do",
        group_label:"todo"
    },
    {
        group_id:"Notes",
        group_label:"notes"
    }
]

var dashLinkGroups =  [
    {
        group_id: "Dash",
        group_label: "dash"
    },
    {
        group_id: "Admin",
        group_label: "admin"
    },
    {
        group_id:"AEM",
        group_label:"aem"
    }
]
 
var dashPermaLinks = [
    {
        link_label: "Miro Board",
        link_url: "https://miro.com/app/board/o9J_kgpq9iY=/",
        link_image: "https://www.google.com/s2/favicons?domain=miro.com",
        link_target: "_blank"
    },
    {
        link_label: "Verizon HP",
        link_url: "https://www.verizon.com",
        link_image: "https://www.google.com/s2/favicons?domain=verizon.com",
        link_target: "_blank"
    },
    {
        link_label: "Financial Doc",
        link_url: "https://miro.com/app/board/o9J_kgpq9iY=/",
        link_image: "https://www.google.com/s2/favicons?domain=google.com",
        link_target: "_blank"
    },
    {
        link_label: "Reddit",
        link_url: "https://www.reddit.com",
        link_image: "https://www.google.com/s2/favicons?domain=reddit.com",
        link_target: "_blank"
    },
]

var dashLinks = {
    dash: [
        {
            link_label: "Chrome Favorites",
            link_url: "https://www.google.com/save",
            link_image: "https://www.google.com/s2/favicons?domain=google.com",
            link_target: "_blank"
        },
        {
            link_label: "Reddit Saves",
            link_url: "https://www.reddit.com/user/IamA3K/saved",
            link_image: "https://www.google.com/s2/favicons?domain=reddit.com",
            link_target: "_blank" 
        },
        {
            link_label: "Google",
            link_url: "https://www.google.com",
            link_image: "https://www.google.com/s2/favicons?domain=google.com",
            link_target: "_blank" 
        },
        {
            link_label: "Yahoo",
            link_url: "https://www.verizon.com",
            link_image: "https://www.google.com/s2/favicons?domain=yahoo.com",
            link_target: "_blank" 
        },
        {
            link_label: "Facebook",
            link_url: "https://www.verizon.com",
            link_image: "https://www.google.com/s2/favicons?domain=facebook.com",
            link_target: "_blank" 
        }
    ],
    admin: [
        {
            link_label: "Home",
            link_url: "https://www.verizon.com",
            link_image: "https://www.google.com/s2/favicons?domain=andrewpen.github.io",
            link_target: "_blank"
        },
        {
            link_label: "Gitlab",
            link_url: "https://www.verizon.com/shop",
            link_image: "https://www.google.com/s2/favicons?domain=gitlab.com",
            link_target: "_blank"
        },
        {
            link_label: "Github",
            link_url: "https://www.verizon.com/deals",
            link_image: "https://www.google.com/s2/favicons?domain=github.com",
            link_target: "_blank"
        }
    ],
    aem: [
        {
            link_label: "Amazon",
            link_url: "https://www.amazon.com",
            link_image: "https://www.google.com/s2/favicons?domain=amazon.com",
            link_target: "_blank"
        },
        {
            link_label: "Adobe",
            link_url: "https://www.adobe.com",
            link_image: "https://www.google.com/s2/favicons?domain=adobe.com",
            link_target: "_blank"
        }
    ]
}




var p1_Links = {
    group_1: [
        {
            link_label: "Page 1, Group 1, Link 1",
            link_url: "https://www.google.com/save",
            link_image: "https://www.google.com/s2/favicons?domain=google.com",
            link_target: "_blank"
        },
        {
            link_label: "Page 1, Group 1, Link 2",
            link_url: "https://www.verizon.com",
            link_image: "https://www.google.com/s2/favicons?domain=verizon.com",
            link_target: "_blank" 
        },
        {
            link_label: "Page 1, Group 1, Link 3",
            link_url: "https://www.google.com",
            link_image: "https://www.google.com/s2/favicons?domain=google.com",
            link_target: "_blank" 
        }
    ],
    group_2: [
        {
            link_label: "Page 1, Group 2, Link 1",
            link_url: "https://www.verizon.com",
            link_image: "https://www.google.com/s2/favicons?domain=andrewpen.github.io",
            link_target: "_blank"
        },
        {
            link_label: "Page 1, Group 2, Link 2",
            link_url: "https://www.verizon.com/shop",
            link_image: "https://www.google.com/s2/favicons?domain=gitlab.com",
            link_target: "_blank"
        },
        {
            link_label: "Page 1, Group 2, Link 3",
            link_url: "https://www.verizon.com/deals",
            link_image: "https://www.google.com/s2/favicons?domain=github.com",
            link_target: "_blank"
        }
    ],
    group_3: [
        {
            link_label: "Page 1, Group 3, Link 1",
            link_url: "https://www.amazon.com",
            link_image: "https://www.google.com/s2/favicons?domain=amazon.com",
            link_target: "_blank"
        },
        {
            link_label: "Page 1, Group 3, Link 2",
            link_url: "https://www.adobe.com",
            link_image: "https://www.google.com/s2/favicons?domain=adobe.com",
            link_target: "_blank"
        }
    ]
}

var p2_Links = {
    group_1: [
        {
            link_label: "Page 2, Group 1, Link 1",
            link_url: "https://www.google.com/save",
            link_image: "https://www.google.com/s2/favicons?domain=google.com",
            link_target: "_blank"
        },
        {
            link_label: "Page 2, Group 1, Link 2",
            link_url: "https://www.verizon.com",
            link_image: "https://www.google.com/s2/favicons?domain=verizon.com",
            link_target: "_blank" 
        },
        {
            link_label: "Page 2, Group 1, Link 3",
            link_url: "https://www.google.com",
            link_image: "https://www.google.com/s2/favicons?domain=google.com",
            link_target: "_blank" 
        }
    ],
    group_2: [
        {
            link_label: "Page 2, Group 2, Link 1",
            link_url: "https://www.verizon.com",
            link_image: "https://www.google.com/s2/favicons?domain=andrewpen.github.io",
            link_target: "_blank"
        },
        {
            link_label: "Page 2, Group 2, Link 2",
            link_url: "https://www.verizon.com/shop",
            link_image: "https://www.google.com/s2/favicons?domain=gitlab.com",
            link_target: "_blank"
        },
        {
            link_label: "Page 2, Group 2, Link 3",
            link_url: "https://www.verizon.com/deals",
            link_image: "https://www.google.com/s2/favicons?domain=github.com",
            link_target: "_blank"
        }
    ],
    group_3: [
        {
            link_label: "Page 2, Group 3, Link 1",
            link_url: "https://www.amazon.com",
            link_image: "https://www.google.com/s2/favicons?domain=amazon.com",
            link_target: "_blank"
        },
        {
            link_label: "Page 2, Group 3, Link 2",
            link_url: "https://www.adobe.com",
            link_image: "https://www.google.com/s2/favicons?domain=adobe.com",
            link_target: "_blank"
        }
    ]
}
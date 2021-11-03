/**************************************************************/

// let newArray = [];

// let getNumberFromUser = () => {
//     let userNumber = Number(prompt("Please Enter Number"));

//     if(userNumber) newArray.push(userNumber);
//     console.log(newArray);
//     if(newArray.length >= 3) return newArray;

//     return getNumberFromUser();
// }

// getNumberFromUser();

// console.log(newArray);


/**************************************************************/


let family = {
    name: "generation1",
    child: {
        name: "generation2",
        child: {
            name: "generation3",
            child: {
                name: "generation4"
            }
        }
    }

}

//if we have One child

// let printAllFamily = (root) => {
//     console.log(root.name);
//     if(root.child) printAllFamily(root.child);
// }

// printAllFamily(family)

/**************************************************************/

// let printAllFamily = (root,counter) => {
//     console.log(root.name);
//     if(root.child && counter < 3){
//         counter++;
//         printAllFamily(root.child);
//     } 
// }

// printAllFamily(family,0)

/**************************************************************/

let family2 = {
    name: "generation1",
    children: [
        {
            name: "generation2 first child",
            children: [{
                name: "generation3 first child"
            }],
        },
        {
            name: "generation2 second child",
                children: [
                {
                    name: "generation3 second child"
                },
                {
                    name: "generation3 second child ",
                    children: [
                        { name: "generation4 second child 1" },
                        { name: "generation4 second child 2" }
                    ]
                }]

        }]

}


// let printAllFamily2 = (root) => {
//     console.log(root.name); //at the first execute log the root element And then log the root Arg change dynamiclly  
//     if (root.children) {
//         for (const child of root.children) {
//             printAllFamily2(child) // at the second execute the Arg will be root.children[0] if if the root.children[0] has children too the Arg will be root.children[0].children[0] till the leaves and then continue to the root.children[1] and ask again to dig.
//         }
//     };
// }

// printAllFamily2(family2);
// // in this function we go  deep as much we have..this called deepth first  search.

/**************************************************************/

let LinuxFileSystem = {
    name: "/",
    children: [
        {
            name: "/bin/",

        },
        {
            name: "/boot/",
        },
        {
            name: "/dev/",
            children: [
                  {
                    name: "/dev/hba/",
                  },
                  {
                    name: "/dev/sda/",
                  },
                  {
                    name: "/dev/sta0/",
                  },

                     ]
        },
        {
            name: "/etc/",
            children: [
                  {
                    name: "/etc/opt/",
                  },
                  {
                    name: "/etc/sgml/",
                  },
                  {
                    name: "/etc/X11/",
                  },
            ]
        },
        {
            name: "/sbin/",
        },
        {
            name: "/usr/",
            children: [
                       {
                        name: "/usr/lib/",
                       },
                       {
                         name: "/usr/local/",
                         children: [
                                     {
                                      name: "/usr/local/bin/",
                                     },
                                     {
                                       name: "/usr/local/man/",
                                     },
                                     {
                                       name: "/usr/local/lib/",
                                     },
                                    ]
                       },
                       {
                         name: "/usr/sbin",
                       },
            ]
        },
        {
            name: "/home/",
            children: [
                        {
                          name: "/home/bob",
                        },
                        {
                          name: "/home/sid",
                        },
                        {
                          name: "/home/yoni",
                        },
                            
                     ]
         },
        {
            name: "/var/",
            children: [
                      {
                        name: "/var/lib/",
                      },
                      {
                        name: "/var/log/",
                      },
                      {
                        name: "/var/opt/",
                      },
                     ]
        },
        {
            name: "/temp/",
        },
        {
            name: "/run/",
        },
    ]

}

/**************************************************************/
/**************************************************************/



let printFileSystem = (root) => {
    console.log(root.name); 
    if (root.children) {
        for (const child of root.children) {
            printFileSystem(child) 
        }
    };
}

printFileSystem(LinuxFileSystem);

/**************************************************************/


let displayFileSystemToWindow = (root,element) => {
    let div = document.createElement("div");
    div.innerHTML += `<h3>${root.name}</h3>` ; 
    element.appendChild(div);
    if (root.children) {
        for (const child of root.children) {
            displayFileSystemToWindow(child,div); 
        }
    };
}

let displayFileSystem = document.getElementById("displayFileSystem");
displayFileSystemToWindow(LinuxFileSystem,displayFileSystem);

/**************************************************************/
















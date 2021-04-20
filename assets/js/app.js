var watina = document.querySelector('#watina');
var three = document.querySelector('#three_little_birds');

var currentScene = 1;
var currentQuest = 1;
var melissaName = "Melissa"
var michaelName = "Michael"
var girlName = "Danielle"
var breadcrumbs = []
var scenes = []

var game = {

    quests: [
        {
            id: 1,
            title: "",
            adventures: [
//1
                {
                    "id": 1,
                    "title": "Home",
                    "description": "Michael and Melissa are at home",
                    "alt": "The couple were at home",
                    "image": "assets/img/relax.png",
                    "options": [
                        {
                            "text": "Stay Home",
                            "leadsTo": 8
                        },
                        {
                            "text": "Go To Club",
                            "leadsTo": 3
                        }
                    ],
                    "handler": function () {
                    }
                },
                //2
                {
                    "id": 2,
                    "title": "Stay Home",
                    "description": "Melissa stays home reading",
                    "alt": "Melissa stayed at home reading",
                    "image": "assets/img/relax.png",
                    "options": [],
                    "handler": function () {

                    }
                },

//3
                {
                    "id": 3,
                    "title": "Go to Club",
                    "description": "Michael goes paradise club alone",
                    "alt": "He went to the club alone",
                    "image": "assets/img/club2.png",
                    "options": [
                        {
                            "text": "Drink",
                            "leadsTo": 4
                        },
                    ],
                    "handler": function () {

                        watina.play();
                    }
                },

                {
                    "id": 4,
                    "title": "Drink",
                    "description": "Michael drinks with friends",
                    "alt": "He had drinks with his friends",
                    "image": "assets/img/drink.png",
                    "options": [
                        {
                            "text": "Go Home",
                            "leadsTo": 8
                        },
                        {
                            "text": "Dance",
                            "leadsTo": 5
                        }
                    ],
                    "handler": function () {
                        watina.pause();
                    }
                },

//5
                {
                    "id": 5,
                    "title": "Dance",
                    "description": "Michael dances with a gorgeous woman (Danielle) who smiled at him",
                    "alt": "He met a gorgeous woman",
                    "image": "assets/img/dance.png",
                    "options": [
                        {
                            "text": "Get Number",
                            "leadsTo": 6
                        },
                        {
                            "text": "Go Home",
                            "leadsTo": 8
                        }
                    ],
                    "handler": function () {
                        watina.play()
                    }
                },


                {
                    "id": 6,
                    "title": "Get Number",
                    "description": "Michael gets the woman's number",
                    "alt": "He gets the number for a woman",
                    "image": "assets/img/number.png",
                    "options": [
                        {
                            "text": "Go Home",
                            "leadsTo": 8
                        }
                    ],
                    "handler": function () {
                        watina.pause();
                    }
                },

                {
                    "id": 8,
                    "title": "Michael and Melissa are at home (The End)",
                    "description": "They are back at home",
                    "alt": "They are back home, the end.",
                    "image": "assets/img/relax.png",
                    "options": [],
                    "handler": function () {
                        $('#resetButton').show()
                        watina.pause();
                    }
                },


                // {
                //     "title": "",
                //     "description": "",
                //    "image": "assets/img/bg.jpg",
                //     "options": [
                //         {
                //             "text": "",
                //             "leadsTo": null
                //         },
                //         {
                //             "text": "",
                //             "leadsTo": null
                //         }
                //     ],
                //     "handler": function(){
                //
                //     }
                // },

            ]
        },
        {
            id: 2,
            title: "",
            adventures: [

                {
                    "id": 1,
                    "title": "Home",
                    "description": "Michael and Melissa are at home",
                    "alt": "The couple are at home",
                    "image": "assets/img/relax.png",
                    "options": [
                        {
                            "text": "Stay Home",
                            "leadsTo": 2
                        },
                        {
                            "text": "Go To Beach",
                            "leadsTo": 3
                        }
                    ],
                    "handler": function () {
                    }
                },

                {
                    "id": 2,
                    "title": "Melissa decides to stay home",
                    "alt": "Melissa stays at home, the end.",
                    "description": "",
                    "image": "assets/img/relax.png",
                    "options": [],
                    "handler": function () {

                    }
                },

//1
                {
                    "id": 3,
                    "title": "To Beach",
                    "description": "Melissa and Michael go to the beach",
                    "alt": "They went to the beach",
                    "image": "assets/img/beach.png",
                    "options": [
                        {
                            "text": "Walk Boardwalk",
                            "leadsTo": 4
                        },

                        {
                            "text": "Swim & Read",
                            "leadsTo": 5
                        },
                    ],
                    "handler": function () {

                    }
                },
                //2
                {
                    "id": 4,
                    "title": "Walking Boardwalk",
                    "description": "Melissa and Michael walk the boardwalk",
                    "alt": "They went to the boardwalk",
                    "image": "assets/img/boardwalk.png",
                    "options": [
                        {
                            "text": "Get Coffee",
                            "leadsTo": 6
                        },
                        {
                            "text": "Arcade",
                            "leadsTo": 7
                        },
                    ],
                    "handler": function () {

                        three.play();
                    }
                },

//3
                {
                    "id": 5,
                    "title": "Water",
                    "description": "Michael goes into the sea while Melissa reads",
                    "alt": "He goes into the sea while she swims",
                    "image": "assets/img/read_swim.png",
                    "options": [
                        {
                            "text": "Swim More",
                            "leadsTo": 9
                        },
                        {
                            "text": "Go Home",
                            "leadsTo": 8
                        },
                    ],
                    "handler": function () {

                    }
                },

                {
                    "id": 6,
                    "title": "Getting Coffee",
                    "description": "Melissa and Michael get frozen coffee (CHOLIS)",
                    "alt": "They get coffee",
                    "image": "assets/img/icecream.png",
                    "options": [
                        {
                            "text": "Go Home",
                            "leadsTo": 8
                        },
                    ],
                    "handler": function () {
                        three.pause()
                    }
                },

//5
                {
                    "id": 7,
                    "title": "Arcade",
                    "description": "Melissa and Michael play in the arcade",
                    "alt": "The play in the arcade",
                    "image": "assets/img/arcade.png",
                    "options": [
                        {
                            "text": "Go Home",
                            "leadsTo": 8
                        },
                    ],
                    "handler": function () {
                        three.pause()
                    }
                },


                {
                    "id": 8,
                    "title": "Home",
                    "description": "Melissa and Michael return home",
                    "alt": "They return home (End)",
                    "image": "assets/img/relax.png",
                    "options": [],
                    "handler": function () {
                        $('#resetButton').show()
                    }
                },

                {
                    "id": 9,
                    "title": "Swim Longer",
                    "description": "Melissa gets in the water and wants to stay longer",
                    "alt": "She gets into the water and wants to stay longer",
                    "image": "assets/img/swim.png",
                    "options": [
                        {
                            "text": "Go Home",
                            "leadsTo": 8
                        },
                    ],
                    "handler": function () {

                    }
                },

                // {
                //     "title": "",
                //     "description": "",
                //    "image": "assets/img/bg.jpg",
                //     "options": [
                //         {
                //             "text": "",
                //             "leadsTo": null
                //         },
                //         {
                //             "text": "",
                //             "leadsTo": null
                //         }
                //     ],
                //     "handler": function(){
                //
                //     }
                // },

            ]
        },
        {
            id: 3,
            title: "",
            adventures: [

                {
                    "id": 1,
                    "title": "Home",
                    "description": "Melissa and Michael are home",
                    "alt": "They are at home",
                    "image": "assets/img/relax.png",
                    "options": [
                        {
                            "text": "Go to the club",
                            "leadsTo": 2
                        },
                        {
                            "text": "Go to the beach",
                            "leadsTo": 3
                        },
                    ],
                    "handler": function () {


                    }
                },

                {
                    "id": 2,
                    "title": "Club",
                    "description": "",
                    "image": "assets/img/club.png",
                    "options": [],
                    "handler": function () {

                    }
                },

//1
                {
                    "id": 3,
                    "title": "To Beach",
                    "description": "Beach",
                    "image": "assets/img/beach.png",
                    "options": [],
                    "handler": function () {

                    }
                },
            ]

        }
    ]
}


var michaelModal = new bootstrap.Modal(document.getElementById('modal-set-michael-name'), {
    keyboard: false,
    backdrop: 'static',
})

var melissaModal = new bootstrap.Modal(document.getElementById('modal-set-melissa-name'), {
    keyboard: false,
    backdrop: 'static',
})

var DanielleModal = new bootstrap.Modal(document.getElementById('modal-set-Danielle-name'), {
    keyboard: false,
    backdrop: 'static',
})

var questModal = new bootstrap.Modal(document.getElementById('modal-set-quest'), {
    keyboard: false,
    backdrop: 'static',
})


String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};


$(document).ready(function (e) {
    $('#app').hide()
    $('#splash').show()

    $('#startBtn').on('click', function () {
        start()
    })

    $('#resetButton').on('click', function () {
        restart()
    })

    $(document).on('click', '.scene-button', function () {
        var sceneId = $(this).data('target')
        updateScene(currentQuest, sceneId)
    });

})

$('#maleNameField').on('input', function () {
    var value = $(this).val() ? $(this).val().toProperCase() : '';
    michaelName = value;
    $('#maleName').html(value);
    $('#maleName2').html(value);
})

$('#femaleNameField').on('input', function () {
    var value = $(this).val() ? $(this).val().toProperCase() : '';
    melissaName = value;
    $('#femaleName').html(value);
    $('#femaleName2').html(value);
})

// $('#saveMichaelButton').on('click', function (e) {
//     var name = $('#michaelInput').val();
//     michaelName = name;
//     michaelModal.hide()
//     melissaModal.show()
// })
//
// $('#saveMelissaButton').on('click', function (e) {
//     var name = $('#melissaInput').val();
//     melissaName = name;
//     melissaModal.hide()
//     questModal.show()
//     // DanielleModal.show()
//
// })

$('#saveQuestButton').on('click', function (e) {
    // var quest = $('#quest option:selected').val();
    var quest = currentQuest = $("input[name='adventure']:checked").val()
    var selectedQuest = parseInt(quest)

    console.log("selected quest is ", quest)
    currentQuest = selectedQuest

    questModal.hide()

    if (currentQuest === 0) {
        DanielleModal.show()
        return
    }

    $('#splash').hide()
    $('#app').show()

    updateScene(currentQuest, currentScene);
})


$('#saveDanielleButton').on('click', function (e) {
    var name = $('#DanielleInput').val();
    girlName = name;
    DanielleModal.hide()
    // questModal.show()

    $('#splash').hide()
    $('#app').show()

    updateScene(currentQuest, currentScene);

})


function restart() {
    $('#maleNameField').val('')
    $('#femaleNameField').val('')
    $('#splash').show()
    $('#app').hide()
    melissaName = "Melissa"
    michaelName = "Michael"
    breadcrumbs = []
    scenes = []
}

function start() {


    if ($('#maleNameField').val().trim() == "") {
        $('#maleNameField').focus()
        // alert("Please enter a male name");
        return
    }

    if ($('#femaleNameField').val().trim() == "") {
        $('#femaleNameField').focus()
        // alert("Please enter a female name");
        return
    }


    // $('#resetButton').hide()


    questModal.show()
    // michaelModal.show()
}

// function generateSceneButtons(scene) {
//
// }

function updateSceneButtons(scene) {
    $('#button-container').html('')

    scene.options.forEach(function (option) {
        var r = $('<button class="btn btn-lg font-weight-bold btn-primary me-2 scene-button" data-target="' + option.leadsTo + '">' + option.text + '</button>');
        $('#button-container').append(r)
    })
}

function executeSceneHandler(scene) {

    if (typeof scene === "undefined") {
        return;
    }

    if (typeof scene.handler == 'function') {
        scene.handler()
    }

}


function updateScene(questId, sceneId) {

    var selectedScene = game.quests[questId].adventures.find(function (scene) {
        return scene.id == sceneId
    });

    var title = selectedScene.title.replace(/Melissa/ig, melissaName).replace(/Michael/ig, michaelName).replace(/Danielle/ig, girlName)

    breadcrumbs.push(title)
    scenes.push(selectedScene)

    $('#heading').text(title)
    $('#description').text(selectedScene.description.replace(/Melissa/ig, melissaName).replace(/Michael/ig, michaelName).replace(/Danielle/ig, girlName))
    updateSceneButtons(selectedScene)
    executeSceneHandler(selectedScene)

    $('#scene-image').attr('src', selectedScene.image)
    refreshBreadcrumb()
    refreshScenesList()
}

function refreshScenesList() {
    $('#storyList').html('')

    scenes.forEach(function (scene, index) {
        $('#storyList').append('<li class="list-group-item">' + (parseInt(index) + 1) + '. ' + scene.alt.replace(/Melissa/ig, melissaName).replace(/Michael/ig, michaelName).replace(/Danielle/ig, girlName) + '</li>')
    })
}

function refreshBreadcrumb() {
    $('#breadcrumb').html('')

    breadcrumbs.forEach(function (breadcrumb) {
        $('#breadcrumb').append('<li><a href="#">' + breadcrumb + '</a></li>')
    })
}

function clearBreadcrumb() {
    $('#breadcrumb').html('')
    breadcrumbs = []
}



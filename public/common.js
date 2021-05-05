function fetchDonors (done) {
    let bg = $('#donorBG').val()
    $.get('/api/donors/' + bg, function (data){
        done (data)
    })
}

function addDonor(name, age, contact, city, blood_group, any_health_issues, done) {
    $.post('/api/donors', {
        name: name,
        age : age,
        contact: contact,
        city: city,
        blood_group: blood_group,
        any_health_issues: any_health_issues
    },  function (data){
        done (data)
    })

}

function createDonor () {
    return $ (`
        <tr>
            <td>${donor.name}</td>
            <td>${donor.age}</td>
            <td>${donor.contact}</td>
            <td>${donor.city}</td>
            <td>${donor.blood_group}</td>
            <td>${donor.any_health_issues}</td>
        </tr>
    `
    )
}


$('#subBtn').click(() => {
    let donorList = $('#donor-list')
    

    let n =$('#donor-list')[0].children[0].children.length;
    for (let i=1; i<n; i++) {
        $('#donor-list')[0].children[0].children[1].remove()
    }
    
    fetchDonors(function (donors){
        for(donor of donors){
            donorList.append(createDonor(donor))
        }
    })
})


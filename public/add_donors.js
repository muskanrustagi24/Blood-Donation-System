$(function () {
    let donorName = $('#donorName')
    let donorAge = $('#donorAge')
    let donorContact = $('#donorContact')
    let donorCity = $('#donorCity')
    let donorBloodGrp = $('#donorBloodGrp')
    let donorAhi = $('#donorAhi')

    $('#btnAddDonor').click(function () {
        console.log('clicked')

        addDonor (
            donorName.val(),
            donorAge.val(),
            donorContact.val(),
            donorCity.val(),
            donorBloodGrp.val(),
            donorAhi.val(),
            function(addedDonor) {
                window.alert("Added " + addedDonor.name + " to Database") 
            }
        )
    })
})
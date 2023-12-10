$(document).ready(() => {
    $("#Registration-table").DataTable({
        // ajax: 'http://localhost:8000/'
    });

    getpatientData()
    
})

function getpatientData(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/",
        dataType: "json",
        beforeSend: function () {
            
        },
        error: function (xhr) {
            
            
            return false;
        },
        success: function (data) {
            var html = '';
            data.forEach(row => {
                 html += `
                <tr>
                    <td>${row.mrn}</td>
                    <td>${row.firstname} ${row.middlename} ${row.lastname}</td>
                    <td>${row.dob}</td>
                    <td>${row.address}</td>
                </tr>
                `
                
            });
            $("#Registration-table tbody").html(html);

        }
    });
}
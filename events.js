$(document).ready(function(){
    var table = "<table><tr><td>Мероприятие</td><td>Дата</td><td>Место</td></tr>";
    $.ajax({
        type:"GET",
        url:"https://raw.githubusercontent.com/bialyPies/gallery/master/aboutDali2.xml",
        dataType:"xml",
        success:function(xml){

            var events = xml.children[0].children;

            $.each(events, function(){
                var event = $(this);
                var name=event.find("name").text();
                var date=event.find("date").text();
                var place=event.find("place").text();
                table +='<tr><td>' + name + '</td><td>' + date + '</td><td>' + place + '</td></tr>';
            })    

            table += "</table>"
            $('#here_table').append(table);
        }
        
    })
});



             $(document).ready(function(){
                // console.log("hello");
                $('#here_table').append(  '<table />' );
                $.ajax({
                    type:"GET",
                    url:"aboutDali2.xml",
                    dataType:"xml",
                    success:function(xml){
                        //.find('events')
                        $(xml).find('events').each(function(){
                            //$(this).children().each(function(){
                                var event = $(this);
                                var name=event.find("name").text();
                                var date=event.find("date").text();
                                var place=event.find("place").text();
                                // $('<tr><td>' + name + '</td><td>' + date + '</td><td>' + place + '</td></tr>').appendTo("table tr:last");
                                $('#here_table table').append('<tr><td>' + name + '</td><td>' + date + '</td><td>' + place + '</td></tr>');
                            //})
                        });
                    }
                })
             });


// $('#here_table').append('<table></table>');
// var table = $('#here_table').children();
//  for(i=0;i<3;i++){
//     table.append( '<tr><td>' + 'result' +  i + '</td></tr>' );
// }             

// $('#here_table').append(  '<table />' );

//  for(i=0;i<3;i++){
//     $('#here_table table').append( '<tr><td>' + 'result' +  i + '</td></tr>' );
// }
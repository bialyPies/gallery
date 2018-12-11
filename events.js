             $(document).ready(function(){
                console.log("hello");
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
                                $('<tr><td>' + name + '</td><td>' + date + '</td><td>' + place + '</td></tr>').appendTo("tr");
                            //})
                        });
                    }
                })
             });
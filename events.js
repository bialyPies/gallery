            // $(document).ready(function(){
                
                $.ajax({
                    type:"GET",
                    url:"aboutDali2.xml",
                    dataType:"xml",
                    success:function(xml){
                        //.find('events')
                        $(xml).find('event').each(function(){
                            $(this).children().each(function(){
                                var name=$(this).find("name").text();
                                var date=$(this).find("date").text();
                                var place=$(this).find("place").text();
                                $('<tr><td>' + name + '</td><td>' + date + '</td><td>' + place + '</td></tr>').appendTo("table");
                            })
                        });
                    }
                })
            // });
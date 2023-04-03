let param = new URLSearchParams(window.location.search)
            
            let heading = param.get("name")
            document.getElementById("teacherName").append("Hello user " + heading)
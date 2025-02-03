fetch("/users")
             .then(response => response.json())
             .then(data => {
                 console.log(data);
                 const keys = Object.keys(data[0]);
                 const table = document.createElement("table");
                 const thead = document.createElement("thead");
                 const tbody = document.createElement("tbody");
                 const tr = document.createElement("tr");
                 keys.forEach(key => {
                     const th = document.createElement("th");
                     th.textContent = key;
                     tr.appendChild(th);
                 });
                 thead.appendChild(tr);
                 table.appendChild(thead);

                 data.forEach(user => {
                     const tr = document.createElement("tr");
                     keys.forEach(key => {
                         const td = document.createElement("td");
                         td.textContent = user[key];
                         tr.appendChild(td);
                     });
                     tbody.appendChild(tr);
                 });

                 table.appendChild(tbody);
                 document.body.appendChild(table);
             });
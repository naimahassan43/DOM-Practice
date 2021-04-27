/********* Create Elements with DOM *******/


/* <tr>
      <td class="post">post 1</td>
      <td>
        <span class="fa fa-times float-right pr-3"></span>
      </td>
    </tr> */

const tr = document.createElement('tr');
const td1 = document.createElement('td');

td1.id = 'post-id';
td1.className = 'post';
td1.innerText = 'Post 6';
td1.setAttribute('title', 'title-6');

console.log(td1);

const td2 = document.createElement('td');
const span = document.createElement('span');

span.className = 'fa fa-times float-right pr-3';
td2.append(span);
console.log(td2);

tr.append(td1, td2);
console.log(tr);

document.querySelector('tbody').append(tr);
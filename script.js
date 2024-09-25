//categorias de edades son de menores de 13, menores de 16 y de 16 o mayores
let elementoEdad = document.getElementById('edad');
let recomendacionElemento =  document.getElementById('recomendacion');
//una sola funcion con los if anidados
function recomendar(genero){
    let edad = Number(elementoEdad.value);
    switch(genero){
        case 'comedia':
            if(edad < 13){
                recomendacionElemento.innerHTML = 
                "<li><img src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/12/infiltrados-universidad.jpg?tf=3840x'></li>" +
                "<li><img src='https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2017/11/273851-mejores-peliculas-comedia-2017.jpg?tf=3840x'></li>";
                break;
            }else{
                if(edad >= 13 && edad < 16){
                    recomendacionElemento.innerHTML = 
                    "<li><img src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/04/scary-movie.jpg?tf=3840x'></li>" +
                    "<li><img src='https://www.kienyke.com/sites/default/files/styles/interna_destacada_s/public/2020-11/Mentes-Maestra-pel%C3%ADcula.jpg?itok=qYEQY4lR'></li>" +
                    "<li><img src='https://www.instyle.es/medio/2020/06/10/te-quiero-imbecil-2020_be9711d7_900x1286.jpg'></li>";
                    break;
                }else{
                    recomendacionElemento.innerHTML = 
                    "<li><img src='https://35mm.es/wp-content/uploads/2021/07/peliculas-parodia-portada.jpg.webp'></li>" +
                    "<li><img src='https://es.web.img3.acsta.net/pictures/24/02/20/12/00/5326822.png'></li>" +
                    "<li><img src='https://s3.ppllstatics.com/rc/www/multimedia/2023/09/04/seguras-kGJH-U21076308164BSD-1200x840@RC.jpg'></li>" +
                    "<li><img src='https://www.euskaltelofertas.com/blog-euskaltel/user/pages/12.top-10-mejores-peliculas-de-risa-netflix/padre-no-hay-mas-que-uno-2.jpg'></li>" +
                    "<li><img src='https://es.web.img3.acsta.net/medias/nmedia/18/83/69/50/19771630.jpg'></li>" +
                    "<li><img src='https://i.ytimg.com/vi/8MLkID-9J2w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHK-8zRv8G6L5UXbeUBdAdW5gSEw'></li>";
                    break;
                }
            }
        case 'drama':
            if(edad < 13){
                recomendacionElemento.innerHTML = 
                "<li><img src='https://www.elnuevoherald.com/guiasdecompra/_next/image?url=https%3A%2F%2Fold.elnuevo.expertido.org%2Fwp-content%2Fuploads%2F2023%2F11%2FThe-Hunger-Games.jpg&w=640&q=75'></li>" +
                "<li><img src='https://decine21.com/img/upload/obras/las-cronicas-de-narnia-el-leon-la-bruja-y-el-armario-500/las-cronicas-de-narnia-el-leon-la-bruja-y-el-armario-500-c.jpg'></li>";
                break;
            }else{
                if(edad >= 13 && edad < 16){
                    recomendacionElemento.innerHTML = 
                    "<li><img src='https://pics.filmaffinity.com/Close-786431694-large.jpg'></li>" +
                    "<li><img src='https://pics.filmaffinity.com/Amor_para_adultos-932228964-large.jpg'></li>" +
                    "<li><img src='https://es.web.img2.acsta.net/c_310_420/pictures/23/05/03/14/13/0249485.jpg'></li>";
                    break;
                }else{
                    recomendacionElemento.innerHTML = 
                    "<li><img src='https://www.dexeus.com/blog/wp-content/uploads/2021/08/image.png'></li>" +
                    "<li><img src='https://statics.diariomendoza.com.ar/2023/09/crop/6503fa7e5deb9__780x780.webp'></li>" +
                    "<li><img src='https://i.ytimg.com/vi/vgTD9qj2s14/maxresdefault.jpg'></li>" +
                    "<li><img src='https://www.pantalla90.es/wp-content/uploads/2024/04/tfg-int-megaphone-digital-1-sheets-es-660c201712dd1.jpg'></li>" +
                    "<li><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqLy0MpUHZpVmDut6Q84gZGNHu9VAhPzh9Sg&s'></li>" +
                    "<li><img src='https://play-lh.googleusercontent.com/a_nuiqoQyp-TQ0FdA90ZGDrOniXGx9XDUaWbarkCKqc65y3wmCZw7U2-NNE1zoD2OhHW'></li>";
                    break;
                }
            }
        case 'musical':
            if(edad < 13){
                recomendacionElemento.innerHTML = 
                "<li><img src='https://decine21.com/img/upload/obras/13-el-musical-45862/13-el-musical-45862-c.jpg'></li>" +
                "<li><img src='https://decine21.com/img/upload/obras/los-chicos-del-coro-463/los-chicos-del-coro-463-c.jpg'></li>";
                break;
            }else{
                if(edad >= 13 && edad < 16){
                    recomendacionElemento.innerHTML = 
                    "<li><img src='https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4_d4ef51c5.png?region=0,0,540,810'></li>" +
                    "<li><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgGEmXuMip0kZ2WDROdPvXMw-zCQx623gLg&s'></li>" +
                    "<li><img src='https://decine21.com/img/upload/obras/fama-1980-6656/fama-1980-6656-c.jpg'></li>";
                    break;
                }else{
                    recomendacionElemento.innerHTML = 
                    "<li><img src='https://decine21.com/img/upload/obras/maestro-s-47111/maestro-s-47111-c.jpg'></li>" +
                    "<li><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK333AaRESZ1MxHQcCoFo5RP1dg5YgDPii9w&s'></li>" +
                    "<li><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkLqzSbGlxsbD_atOP0z-DnnSggmD80tnmqQ&s'></li>" +
                    "<li><img src='https://pics.filmaffinity.com/This_Is_Me_A_Now_Una_historia_de_amor-368304337-large.jpg'></li>" +
                    "<li><img src='https://es.web.img3.acsta.net/pictures/24/01/16/16/13/0594287.jpg'></li>" +
                    "<li><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2N4HEgvA5WLKOY0wEn9qVODL-dvwj7roSA&s'></li>";
                    break;
                }
            }
        case 'crimen':
            if(edad < 13){
                recomendacionElemento.innerHTML = 
                "<li><img src='https://es.web.img2.acsta.net/c_310_420/pictures/14/04/25/10/40/567858.jpg'></li>" +
                "<li><img src='https://i.pinimg.com/236x/38/0e/76/380e76762e876e5fdb9fa139c14c662b.jpg'></li>";
                break;
            }else{
                if(edad >= 13 && edad < 16){
                    recomendacionElemento.innerHTML = 
                    "<li><img src='https://es.web.img2.acsta.net/c_310_420/pictures/15/11/13/12/43/446246.jpg'></li>" +
                    "<li><img src='https://mx.web.img3.acsta.net/pictures/20/05/04/20/55/0817752.jpg'></li>" +
                    "<li><img src='https://pics.filmaffinity.com/Secretos_de_un_crimen-203036684-large.jpg'></li>";
                    break;
                }else{
                    recomendacionElemento.innerHTML = 
                    "<li><img src='https://es.web.img3.acsta.net/c_310_420/img/05/66/05663f00b8b5df58b003aaf5c46ef8ad.jpg'></li>" +
                    "<li><img src='https://i.ebayimg.com/thumbs/images/g/-PwAAOSwLjxghuPX/s-l1200.jpg'></li>" +
                    "<li><img src='https://decine21.com/img/upload/obras/asesinato-en-el-orient-express-34701/asesinato-en-el-orient-express-34701-c.jpg'></li>" +
                    "<li><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMdC_WYdNlICRoDUv8VexEHQrvfjZeClNRg&s'></li>" +
                    "<li><img src='https://es.web.img3.acsta.net/pictures/15/11/10/08/36/284685.jpg'></li>" +
                    "<li><img src='https://es.web.img3.acsta.net/c_310_420/pictures/15/11/13/16/27/316410.jpg'></li>";
                    break;
                }
            }
    }
}
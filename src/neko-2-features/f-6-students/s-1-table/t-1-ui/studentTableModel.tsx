import {IShopTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableInitialState";
import React from "react";
import {ITableModel} from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/Table";
import ProjectModalContainer from "./modals/ProjectModalContainer";

export const studentTableModel: ITableModel[] = [
    {
        title: (i: number) => (<div key={i} style={{width: '338px', padding: '11px', flexShrink: 0}}>Students</div>),
        render: (d: IShopTable, i: number) => {
            return (
                <div
                    key={i}
                    style={{
                        width: '338px',
                        border: '1px solid black',
                        margin: '5px',
                        padding: '5px',
                        flexShrink: 0,
                    }}
                >
                    {d.name}
                </div>
            )
        }
    },
    {
        title: (i: number) => (
            <div key={i} style={{width: '150px', padding: '11px', flexShrink: 0}}>
                gh-pages link
            </div>
        ),
        render: (d: IShopTable, i: number) => {
            return (
                <div
                    key={i}
                    style={{
                        width: '150px',
                        border: '1px solid black',
                        margin: '5px',
                        padding: '5px',
                        flexShrink: 0,
                        overflow: 'hidden',
                    }}
                >
                    {d.ghPagesLink
                        ? <a href={d.ghPagesLink} target={'blanck'}>{d.ghPagesLink}</a>
                        : 'нет ссылки'
                    }
                </div>
            )
        }
    },
    {
        title: (i: number) => (
            <div key={i} style={{width: '80px', padding: '11px', flexShrink: 0}}>
                общее<br/>количество<br/>баллов
            </div>
        ),
        render: (d: IShopTable, i: number) => {
            let allPoints: number = 0;
            if (d.ghPagesLink) allPoints++;

            return (
                <div
                    key={i}
                    style={{
                        width: '80px',
                        border: '1px solid black',
                        margin: '5px',
                        padding: '5px',
                        flexShrink: 0,
                        overflow: 'hidden',
                    }}
                >
                    {allPoints}
                </div>
            )
        }
    },
    {
        title: (i: number) => {
            return (
                <div key={i} style={{width: '80px', padding: '11px', flexShrink: 0}}>
                    <ProjectModalContainer
                        style={{width: '100%', height: '100%'}}
                        name={<div>баллы<br/>проекта</div>}
                    >
                        +100 - тайпскрипт<br/>
                        +1 - за каждый коммит/пуш<br/>
                        +1 - за каждую созданную папку<br/>
                        +1 - за каждый созданный jsx<br/>
                        +1 - за каждый созданный js без jsx<br/>
                        +1 - за каждый module.css<br/>
                        -100 - залита на git node_modules<br/>
                        -50 - залита на git .idea<br/>
                        -1 - за каждый js файл с jsx<br/>
                        -1 - за каждую папку с +7 файлами<br/>
                        -1 - за каждую папку с +7 папками<br/>
                        -1 - за каждый не module.css<br/>
                        -1 - за каждый неровный тэг<br/>
                        -1 - за каждые 2 пустые строки подряд<br/>
                        -1 - за каждый залитый debugger<br/>
                    </ProjectModalContainer>
                </div>
            )
        },
        render: (d: IShopTable, i: number) => {
            let allPoints: number = 0;

            return (
                <div
                    key={i}
                    style={{
                        width: '80px',
                        border: '1px solid black',
                        margin: '5px',
                        padding: '5px',
                        flexShrink: 0,
                        overflow: 'hidden',
                    }}
                >
                    {allPoints}
                </div>
            )
        }
    },
    {
        title: (i: number) => {
            return (
                <div key={i} style={{width: '80px', padding: '11px', flexShrink: 0}}>
                    <ProjectModalContainer
                        style={{width: '100%', height: '100%'}}
                        name={<div>баллы<br/>понед.</div>}
                    >
                        +1 - за каждое свойство и метод в props<br/>
                        +1 - за каждый map<br/>
                        -1 - за каждый отсутствующий key<br/>
                    </ProjectModalContainer>
                </div>
            )
        },
        render: (d: IShopTable, i: number) => {
            let allPoints: number = 0;

            return (
                <div
                    key={i}
                    style={{
                        width: '80px',
                        border: '1px solid black',
                        margin: '5px',
                        padding: '5px',
                        flexShrink: 0,
                        overflow: 'hidden',
                    }}
                >
                    {allPoints}
                </div>
            )
        }
    },


    {
        title: (i: number) => (<div key={i} style={{width: '10%', flexShrink: 0}}>...</div>),
        render: (d: IShopTable, i: number) => (<div key={i} style={{width: '10%', flexShrink: 0}}>...</div>)
    },
];

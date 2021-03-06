import React, {CSSProperties, ReactNode} from 'react';
import {FlexColumn, FlexStyle} from "../../../../../neko-3-styles/flex-containers";

export interface ITableModel {
    title: (index: number) => ReactNode;
    render: (dataItem: any, modelIndex: number, dataIndex: number) => ReactNode;
}

export interface ITableProps {
    loading?: boolean; error?: string;

    title?: string; model: ITableModel[]; data: any;

    headerStyle?: CSSProperties, tableStyle?: CSSProperties, rowsStyle?: CSSProperties, rowStyle?: CSSProperties,
}

const Table: React.FC<ITableProps> = (
    {
        loading, error,

        title = 'table', model, data,

        headerStyle, tableStyle,
        rowsStyle, rowStyle,
    }
) => {

    return (
        <div style={{margin: '0 10px', ...tableStyle}}>
            {title}

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : <div><br/></div>
            }

            <div style={{border: '1px solid red', minWidth: '100%', ...FlexStyle, ...headerStyle}}>
                {model.map((m: any, index: number) => m.title(index))}
            </div>

            <div style={{border: '1px solid lime', minWidth: '100%', ...rowsStyle}}>
                {data.map((dataItem: any, dataIndex: number) => (
                    <div key={dataItem.id || dataIndex} style={{minWidth: '100%', ...FlexStyle, ...rowStyle}}>
                        {model.map((m, modelIndex) => m.render(dataItem, modelIndex, dataIndex))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;

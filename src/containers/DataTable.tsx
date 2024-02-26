import React, { useEffect, useRef } from 'react';
import DataTables, { Config } from 'datatables.net-dt';
import { UserFormData } from '../types';

import "datatables.net-dt/css/jquery.dataTables.min.css";

interface DataTableProps {
  data: any;
  columns: any
}

const DataTable: React.FC<DataTableProps> = ({ ...props }: Config) => {

  const tableRef = useRef<HTMLTableElement>(null);


  useEffect(() => {

    const dt = new DataTables(tableRef.current!, props);

    if (tableRef.current) {
      tableRef.current.style.width = "100%";

    }

    return () => {
      dt.destroy();
    };

  }, [props]);

  return (
    <table ref={tableRef} >

    </table>
  );
};

export default DataTable;

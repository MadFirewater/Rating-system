package com.chdtu.service;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.File;
import java.lang.reflect.Field;
import java.util.*;

@Service
public class XlsService {

    public List<Map<String, String>> parseExcelToListOfMap(File file) throws Exception {
        Workbook workbook = new XSSFWorkbook(file);
        Sheet sheet = workbook.getSheetAt(0);
        Iterator<Row> iterator = sheet.iterator();

        Row currentRow = iterator.next();
        Iterator<Cell> cellIterator = currentRow.iterator();
        List<String> titles = new ArrayList<>();
        List<Map<String, String>> result = new ArrayList<>();

        while (cellIterator.hasNext()) {
            Cell currentCell = cellIterator.next();
            titles.add(currentCell.getStringCellValue());
        }

        while (iterator.hasNext()) {
            Map<String, String> map = new HashMap<>();
            currentRow = iterator.next();
            cellIterator = currentRow.iterator();
            int i = 0;
            while (cellIterator.hasNext()) {
                Cell currentCell = cellIterator.next();
                map.put(titles.get(i), currentCell.getStringCellValue());
                i++;
            }
            result.add(map);
        }
        return result;
    }

    public void writeMapToObject(Map<String, String> map, Object object) throws NoSuchFieldException, IllegalAccessException {
        for (String key : map.keySet()) {
            Field field = object.getClass().getDeclaredField(key);
            field.setAccessible(true);
            field.set(object, map.get(key));
        }
    }
}



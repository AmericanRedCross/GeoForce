-- Index: idx_gadm0_id_0

-- DROP INDEX idx_gadm0_id_0;

CREATE UNIQUE INDEX idx_gadm0_id_0
  ON gadm0
  USING btree
  (id_0);


-- Index: idx_gadm1_id_0

-- DROP INDEX idx_gadm1_id_0;

CREATE INDEX idx_gadm1_id_0
  ON gadm1
  USING btree
  (id_0);

-- Index: idx_gadm1_id_1

-- DROP INDEX idx_gadm1_id_1;

CREATE INDEX idx_gadm1_id_1
  ON gadm1
  USING btree
  (id_1);

-- Index: idx_gadm2_id_0

-- DROP INDEX idx_gadm2_id_0;

CREATE INDEX idx_gadm2_id_0
  ON gadm2
  USING btree
  (id_0);

-- Index: idx_gadm2_id_1

-- DROP INDEX idx_gadm2_id_1;

CREATE INDEX idx_gadm2_id_1
  ON gadm2
  USING btree
  (id_1);


-- Index: idx_gadm2_id_2

-- DROP INDEX idx_gadm2_id_2;

CREATE INDEX idx_gadm2_id_2
  ON gadm2
  USING btree
  (id_2);

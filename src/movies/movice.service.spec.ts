import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { Movie } from "./entities/movie.entity";
import { MoviesService } from "./movies.service"

describe('MoviesService', () => {
    let service: MoviesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MoviesService],
        }).compile();

        service = module.get<MoviesService>(MoviesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    // getAll test
    describe('getAll', () => {
        it('should return an array', () => {
            const result = service.getAll();
            expect(result).toBeInstanceOf(Array);
        });
    });

    // getOne test
    describe("getOne", () => {
        it("return Movie Test", () => {
            service.create({
                title: 'Test Movie',
                year: 2024,
                genres: ['test']
            });
            const result = service.getOne(1);
            expect(result).toBeDefined();
            expect(result.id).toEqual(1);
        });
        it("404 error ", () => {
            try {
                service.getOne(999);
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
                expect(e.message).toEqual('Not Found Movie with ID');
            }
        })
    });

    // delete test
    describe('deleteOne', () => {
        it('test DeleteOne', () => {
            service.create({
                title: 'Test Movie',
                year: 2024,
                genres: ['test']
            });
            const beforeDelete = service.getAll().length;
            service.deleteOne(1);
            const afterDelete = service.getAll().length;

            expect(afterDelete).toBeLessThan(beforeDelete);
        })
        it('return a 404', () => {
            try {
                service.getOne(9999);
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
            };
        });
    });

    // create test
    describe('create', () => {
        it('create movie test', () => {
            const befereCreate = service.getAll().length;
            service.create({
                title: 'Test Movie',
                year: 2024,
                genres: ['test']
            });
            const afterCreate = service.getAll().length;
            expect(afterCreate).toBeGreaterThan(befereCreate);
        });
    });

    // update test
    describe('update', () => {
        it('update test', () => {
            service.create({
                title: 'Test Movie',
                year: 2024,
                genres: ['test']
            });

            service.update(1, {title: 'updateTest'});

            const movie = service.getOne(1);

            expect(movie.title).toEqual('updateTest');
        });

        it('exception', () => {
            try {
                service.update(999, {
                    title: 'updateTest'
                });
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
            }
        })
    })

});